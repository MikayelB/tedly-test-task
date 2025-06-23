("use client");

import Arrow from "../icons/arrow-data-transfer-horizontal.svg";
import CopyBtn from "../icons/copy.svg";
import UserBlank from "../icons/user-multiple.svg";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";

export interface Project {
  id: number;
  name: string;
  description: string;
  date: string;
  status: string;
  stage: string;
  assignee?: string;
  property?: string;
  unit?: string;
  room?: string;
  price?: string;
  note?: string;
}

interface ProjectRowProps {
  project: Project;
}

const ProjectRow = ({ project }: ProjectRowProps) => {
  return (
    <div>
      <div
        key={project.id}
        className="bg-white border-b-[1.5px] border-gray-100 pl-3 pr-2.5 py-4 grid grid-cols-1 md:grid-cols-project gap-4 items-center"
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
        <div>
          <ProgressBar currentStage={project.stage} />
        </div>
        <div className="leading-none text-xs font-semibold text-gray-400">
          {project.assignee ? (
            <div
              className={`flex gap-2 ${
                project.assignee
                  ? "justify-center xl:justify-start"
                  : "justify-center"
              } items-center w-full`}
            >
              <Avatar name={project.assignee} />
              <span className="hidden xl:inline text-sm font-medium text-gray-800">
                {project.assignee}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center xl:justify-start gap-2 pl-1 w-full">
              <UserBlank />
              <span className="hidden xl:inline">No Assignee</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-[6px]">
          <div className="leading-none text-sm font-medium text-gray-800">
            {project.unit}
          </div>
          <div className="relative">
            <div
              className="text-sm font-medium text-gray-600 truncate cursor-pointer hover:text-gray-800 max-w-[197px]"
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
                if (project.note) {
                  navigator.clipboard.writeText(project.note);
                  const span = document.createElement("span");
                  span.textContent = "Copied";
                  span.className =
                    "absolute -top-1 left-6 text-xs text-gray-600";
                  e.currentTarget.parentNode.appendChild(span);
                  setTimeout(() => span.remove(), 1000);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
