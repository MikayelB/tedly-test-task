// Employee entity (as returned from Strapi)
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  projects?: {
    data: Project[];
  };
}

// Project entity (as returned from Strapi)
export interface Project {
  id: number;
  name: string;
  description: string;
  registrationDate: string; // Dates come as strings in JSON
  projectStatus: "active" | "completed" | "archived";
  stage:
    | "Project created"
    | "Documents uploaded"
    | "Start date confirmed"
    | "In progress"
    | "Under review"
    | "Completed";
  property: string;
  unit: string;
  room: string;
  price: number | null;
  note: string;
  assignee: Employee | null;
}
