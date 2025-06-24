import { useEffect, useState } from "react";
import { addEmployee, getEmployees } from "../lib/api";
import { useAppDispatch } from "../store/hooks";
import { createProject } from "../store/slices/projectsSlice";
import { Employee } from "../types/strapi";

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (projectData: any) => void;
}

const NewProjectModal = ({
  isOpen,
  onClose,
  onSubmit,
}: NewProjectModalProps) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    registrationDate: "",
    projectStatus: "active",
    stage: "Project created",
    property: "",
    unit: "",
    room: "",
    price: "",
    note: "",
    assignee: "",
  });

  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    if (isOpen) {
      getEmployees().then((res) => setEmployees(res));
    }
  }, [isOpen]);

  if (!isOpen) return null;
  const isFormValid = formData.name.trim() !== "";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg p-6 w-[500px]">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            let assigneeId: number | null = null;

            if (formData.assignee.trim() !== "") {
              const input = formData.assignee.trim();

              // Try matching an existing employee
              const matched = employees.find(
                (emp) =>
                  `${emp.firstName} ${emp.lastName}`.toLowerCase() ===
                  input.toLowerCase()
              );

              if (matched) {
                assigneeId = matched.id;
              } else {
                // creating a new employee
                const parts = input.split(" ");
                if (parts.length !== 2) {
                  alert("Please enter full name (John Doe)");
                  return;
                }

                const [firstName, lastName] = parts;
                try {
                  const newEmp = await addEmployee(firstName, lastName);
                  assigneeId = newEmp.id;
                  setEmployees((prev) => [...prev, newEmp]);
                } catch (err) {
                  alert("Failed to create employee.");
                  console.error(err);
                  return;
                }
              }
            }

            /* !!!-------For testing purposes, generates the stage and status at random-------!!! */
            const stages = [
              "Project created",
              "Documents uploaded",
              "Start date confirmed",
              "In progress",
              "Under review",
              "Completed",
            ];

            const statuses = ["active", "completed", "archived"];

            const getRandom = <T,>(arr: T[]): T =>
              arr[Math.floor(Math.random() * arr.length)];

            const projectData = {
              ...formData,
              assignee: assigneeId,
              registrationDate:
                formData.registrationDate ||
                new Date().toISOString().split("T")[0],
              stage: getRandom(stages),
              projectStatus: getRandom(statuses),
              price:
                formData.price.trim() === "" ? null : parseInt(formData.price),
            };

            try {
              await dispatch(createProject(projectData)).unwrap();
              onClose();
            } catch (err) {
              console.error("Failed to create project:", err);
            }
          }}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Project Name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded h-24"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <input
              list="assignee-options"
              type="text"
              placeholder="Assignee (select or type new)"
              className="w-full p-2 border rounded"
              value={formData.assignee}
              onChange={(e) =>
                setFormData({ ...formData, assignee: e.target.value })
              }
            />
            <datalist id="assignee-options">
              {employees.map((emp) => (
                <option
                  key={emp.id}
                  value={`${emp.firstName} ${emp.lastName}`}
                />
              ))}
            </datalist>

            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Property"
                className="w-full p-2 border rounded"
                value={formData.property}
                onChange={(e) =>
                  setFormData({ ...formData, property: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Unit"
                className="w-full p-2 border rounded"
                value={formData.unit}
                onChange={(e) =>
                  setFormData({ ...formData, unit: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Room"
                className="w-full p-2 border rounded"
                value={formData.room}
                onChange={(e) =>
                  setFormData({ ...formData, room: e.target.value })
                }
              />
            </div>
            <input
              type="number"
              placeholder="Price"
              className="w-full p-2 border rounded"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <textarea
              placeholder="Int. Note"
              className="w-full p-2 border rounded h-24"
              value={formData.note}
              onChange={(e) =>
                setFormData({ ...formData, note: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-4 py-2 rounded text-white ${
                isFormValid
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProjectModal;
