"use client";

import { mockProjects } from "../../data/mockProjects";
import Arrow from "../icons/arrow-data-transfer-horizontal.svg";
import CopyBtn from "../icons/copy.svg";

const ProjectList = () => {
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <button className="bg-primary-accentGreen text-white px-4 py-2 rounded hover:bg-green-600">
          + Add Project
        </button>
      </div>

      <div className="bg-white border-[1.5px] border-gray-100 rounded-t-2xl ">
        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-6 gap-4 px-3 pt-3 text-xs font-medium text-gray-500 ">
          <div>Project Name</div>
          <div>Stage</div>
          <div>Assignee</div>
          <div>Property/Unit/Room</div>
          <div>Price</div>
          <div>Int.note</div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col ml-[31px]">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-b-[1.5px] border-gray-100 pl-3 pr-2.5 py-4 grid grid-cols-1 md:grid-cols-6 gap-4 items-center"
            >
              <div className="flex flex-col gap-[2px]">
                <div className="text-sm font-semibold text-gray-800">
                  {project.name}
                </div>
                <div className="leading-none text-xs font-medium text-gray-700">
                  {project.description}
                </div>
                <div className="flex items-center gap-2 py-[6px] leading-none text-xs font-medium text-gray-500">
                  {project.date}
                  <Arrow />
                </div>
              </div>
              <div className="leading-none text-xs font-medium text-gray-700">
                {project.stage}
              </div>
              <div className="text-sm text-gray-700">{project.assignee}</div>
              <div className="flex flex-col gap-[6px]">
                <div className="leading-none text-sm font-medium text-gray-800">
                  {project.unit}
                </div>
                <div className="relative">
                  <div
                    className="text-sm font-medium text-gray-600 truncate cursor-pointer hover:text-gray-800"
                    title={project.property}
                  >
                    {project.property}
                  </div>
                </div>
                <div className="leading-none text-sm font-medium text-gray-800">
                  {project.room}
                </div>
              </div>
              <div className="leading-none text-sm font-bold text-gray-800">
                {project.price ? `$${project.price}` : "-"}
              </div>
              <div className="text-sm text-gray-700">
                <div className="relative flex items-center justify-center w-[40px] h-[40px] bg-gray-50 rounded-[29px] hover:bg-gray-100">
                  <CopyBtn
                    role="button"
                    aria-label="Copy note"
                    tabIndex={0}
                    onClick={(e: any) => {
                      navigator.clipboard.writeText(project.note);
                      const span = document.createElement("span");
                      span.textContent = "Copied";
                      span.className =
                        "absolute -top-1 left-6 text-xs text-gray-600";
                      e.currentTarget.parentNode.appendChild(span);
                      setTimeout(() => span.remove(), 1000);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
