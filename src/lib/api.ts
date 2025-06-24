import { Employee, Project } from "../types/strapi";

const BASE_URL = "http://localhost:1337/api";

// Get all projects
export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/projects?populate=assignee`);
  const json: { data: Project[] } = await res.json();
  return json.data;
}

// Add a new project
export async function addProject(project: Project): Promise<Project> {
  const res = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: project }),
  });

  const json: { data: Project } = await res.json();
  return json.data;
}

// Get all employees
export async function getEmployees(): Promise<Employee[]> {
  const res = await fetch(`${BASE_URL}/employees`);
  const json: { data: Employee[] } = await res.json();
  return json.data;
}

// Add a new employee
export async function addEmployee(firstName: string, lastName: string): Promise<Employee> {
  const res = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        firstName,
        lastName,
      },
    }),
  });

  const json: { data: Employee } = await res.json();
  return json.data;
}

