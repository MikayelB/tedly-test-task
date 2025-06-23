"use client";

// import Avatar from "@mui/material/Avatar";
import { mockProjects } from "../../data/mockProjects";
import PlusSign from "../icons/plus-sign.svg";
import Search from "../icons/search.svg";
import ProjectRow, { Project } from "./ProjectRow";

const ProjectList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="flex gap-[8px]">
          <button className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-[29px] ">
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
        <div className="flex flex-col ml-[31px]">
          {mockProjects.map((project: Project) => (
            <ProjectRow key={project.id} project={project} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
