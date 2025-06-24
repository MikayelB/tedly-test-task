"use client";

import { useEffect, useMemo, useState } from "react";
// import { mockProjects } from "../../data/mockProjects";
import PlusSign from "../icons/plus-sign.svg";
import { addProject, getProjects } from "../lib/api";
import { Project } from "../types/strapi";
import FilterButtons from "./FilterButtons";
import NewProjectModal from "./NewProjectModal";
import ProjectRow from "./ProjectRow";
import SearchButton from "./SearchButton";

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getProjects();
      setProjects(response);
    };

    fetchProjects();
  }, []);

  const handleCreateProject = async (projectData: Project) => {
    try {
      await addProject(projectData);
      const updatedProjects = await getProjects();
      setProjects(updatedProjects);
    } catch (err) {
      console.error("Failed to create project:", err);
    }
  };

  const getStatusCounts = () => {
    const all = projects.length;
    const active = projects.filter((p) => p.projectStatus === "active").length;
    const completed = projects.filter(
      (p) => p.projectStatus === "completed"
    ).length;
    const archived = projects.filter(
      (p) => p.projectStatus === "archived"
    ).length;

    return { all, active, completed, archived };
  };

  const filteredProjects = useMemo(() => {
    let filtered =
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.projectStatus === activeFilter);

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [projects, activeFilter, searchTerm]);

  const counts = getStatusCounts();

  return (
    <div className="p-6">
      {/* Filters + Search + New Project */}
      <div className="flex justify-between items-center mb-6">
        <FilterButtons
          counts={counts}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <div className="flex gap-[8px]">
          <SearchButton onSearch={setSearchTerm} />
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-[8px] bg-gray-900 leading-none text-sm font-semibold text-white px-4 py-2 rounded-[28px] shadow-xl  hover:bg-gray-800 "
          >
            <PlusSign /> Add Project
          </button>
        </div>
      </div>

      <div className="bg-white border-[1.5px] border-gray-100 rounded-t-2xl ">
        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-project gap-4 px-3 pt-3 text-xs font-medium text-gray-500">
          <div>Project Name</div>
          <div>Stage</div>
          <div className="flex justify-center xl:justify-start">Assignee</div>
          <div>Property/Unit/Room</div>
          <div>Price</div>
          <div>Int.note</div>
        </div>
        {/* Project Cards */}
        {filteredProjects.length === 0 ? (
          <span className="flex flex-col items-center justify-center text-gray-900 p-10">
            No projects found, create one with the button.
          </span>
        ) : (
          filteredProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))
        )}
      </div>
      <NewProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateProject}
      />
    </div>
  );
};

export default ProjectList;
