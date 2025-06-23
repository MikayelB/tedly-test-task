"use client";

import { useMemo, useState } from "react";
import { mockProjects } from "../../data/mockProjects";
import PlusSign from "../icons/plus-sign.svg";
import Search from "../icons/search.svg";
import FilterButtons from "./FilterButtons";
import ProjectRow from "./ProjectRow";

const getStatusCounts = () => {
  const all = mockProjects.length;

  const active = mockProjects.filter((p) => p.status === "active").length;
  const completed = mockProjects.filter((p) => p.status === "completed").length;
  const archived = mockProjects.filter((p) => p.status === "archived").length;

  return { all, active, completed, archived };
};

const ProjectList = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const counts = getStatusCounts();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return mockProjects;
    return mockProjects.filter((project) => project.status === activeFilter);
  }, [activeFilter]);

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
          <button className="flex items-center justify-center  bg-white rounded-[29px] ">
            <Search />
          </button>
          <button className="flex items-center gap-[8px] bg-gray-900 leading-none text-sm font-semibold text-white px-4 py-2 rounded-[28px] shadow-xl  hover:bg-gray-800 ">
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
        {filteredProjects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
