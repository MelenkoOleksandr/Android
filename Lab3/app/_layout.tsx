import { Stack } from "expo-router";
import { createContext, useState } from "react";

export const projectsContext = createContext<{
  projects: any[];
  setProjects: (projects: any[]) => void;
}>({ projects: [], setProjects: () => {} });

export const ProjectsProvider = projectsContext.Provider;

export default function RootLayout() {
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "Project 1",
      description: "Project details...",
      price: 100,
      hours: 10,
      sum: 1000,
      performers: [
        {
          id: "1",
          code: "P001",
          companyName: "Company A",
          phone: "123-456-7890",
        },
        {
          id: "2",
          code: "P002",
          companyName: "Company B",
          phone: "987-654-3210",
        },
      ],
    },
    {
      id: "2",
      name: "Project 2",
      description: "Project details...",
      price: 200,
      hours: 20,
      sum: 4000,
      performers: [],
    },
  ]);

  return (
    <ProjectsProvider
      value={{
        projects,
        setProjects: (projects: any) => setProjects(projects),
      }}
    >
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ProjectsProvider>
  );
}
