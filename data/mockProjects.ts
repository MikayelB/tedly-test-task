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

export const mockProjects: Project[] = [
  {
    id: 1,
    name: "Leak Detection Experts",
    description: "Plumbing",
    date: "01/01/2025",
    status: "active",
    stage: "Project created",
    // assignee: "Qarea Reno LLC",
    property: "1234 Maple Grove Lane, Suite 101, Springfield, IL 62704",
    unit: "Unit 1",
    room: "Bedroom",
    price: "12,000",
    note: "Client approved changes",
  },
  {
    id: 2,
    name: "Leak Detection Experts",
    description: "Plumbing",
    date: "01/01/2025",
    status: "archived",
    stage: "Start date confirmed",
    assignee: "Qarea Reno LLC",
    property: "1234 Maple Grove Lane, Suite 101, Springfield, IL 62704",
    unit: "Unit 1",
    room: "Bedroom",
    note: "Client approved changes",
  },
  {
    id: 3,
    name: "Leak Detection Experts",
    description: "Plumbing",
    date: "01/01/2025",
    status: "completed",
    stage: "In progress",
    assignee: "Qarea Reno LLC",
    property: "1234 Maple Grove Lane, Suite 101, Springfield, IL 62704",
    // unit: "Unit 1",
    // room: "Bedroom",
    price: "12,000",
    // note: "Client approved changes",
  },
  {
    id: 4,
    name: "Leak Detection Experts",
    description: "Plumbing",
    date: "01/01/2025",
    status: "active",
    stage: "Under review",
    assignee: "Qarea Reno LLC",
    property: "1234 Maple Grove Lane, Suite 101, Springfield, IL 62704",
    // unit: "Unit 1",
    room: "Bedroom",
    price: "12,000",
    note: "test",
  },
  {
    id: 5,
    name: "Test Search",
    description: "Plumbing",
    date: "01/01/2025",
    status: "active",
    stage: "Under review",
    assignee: "Qarea Reno LLC",
    property: "1234 Maple Grove Lane, Suite 101, Springfield, IL 62704",
    // unit: "Unit 1",
    room: "Bedroom",
    price: "12,000",
    note: "test",
  },
];
