"use client";

const stages = [
  "Project created",
  "Documents uploaded",
  "Start date confirmed",
  "In progress",
  "Under review",
  "Completed",
];

type ProgressBarProps = {
  currentStage: string;
};

const ProgressBar = ({ currentStage }: ProgressBarProps) => {
  const currentIndex = stages.indexOf(currentStage);

  return (
    <div className="flex flex-col w-full max-w-[145px] max-h-[48px] gap-2">
      <div className="flex justify-between">
        <p className="leading-none text-xs font-medium text-gray-700">
          {currentStage}
        </p>
      </div>
      <div className="grid grid-cols-6 w-full h-[3px] rounded-full overflow-hidden">
        {stages.map((stage, i) => {
          const filled = i < currentIndex;
          const active = i === currentIndex;
          const isLast = i === stages.length - 1;

          return (
            <div
              key={stage}
              className={`transition-colors h-full 
                ${filled || active ? "bg-purple-600" : "bg-gray-200"}
                ${!isLast ? "border-r border-white" : ""}
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
