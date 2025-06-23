import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    assignee: "",
    property: "",
    unit: "",
    room: "",
    price: "",
    note: "",
  });

  if (!isOpen) return null;

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
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
            onClose();
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
              type="text"
              placeholder="Assignee"
              className="w-full p-2 border rounded"
              value={formData.assignee}
              onChange={(e) =>
                setFormData({ ...formData, assignee: e.target.value })
              }
            />
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
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
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
