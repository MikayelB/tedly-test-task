import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Project } from "../../types/strapi";
import { getProjects, addProject } from "../../lib/api";

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    return await getProjects();
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (projectData: any) => {
    return await addProject(projectData);
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch projects";
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      });
  },
});

export default projectsSlice.reducer;
