
import React, { useState } from "react";
import { Search, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Project {
  id: string;
  name: string;
  clusters: string;
  tags: string[];
  users: number;
  teams: number;
  alerts: number;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "LMS",
    clusters: "1 Cluster",
    tags: [],
    users: 1,
    teams: 0,
    alerts: 0,
  },
  {
    id: "2",
    name: "Manage Project",
    clusters: "1 Cluster",
    tags: [],
    users: 1,
    teams: 0,
    alerts: 0,
  },
  {
    id: "3",
    name: "Project 0",
    clusters: "0 Clusters",
    tags: [],
    users: 1,
    teams: 0,
    alerts: 0,
  },
];

export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTag = (projectId: string) => {
    // Logic to add tags would go here
    console.log("Adding tag to project", projectId);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-800 mb-4 md:mb-0">Projects</h1>
        <Button className="bg-green-700 hover:bg-green-800 text-white">
          New Project
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Find a project..."
          className="pl-10 bg-white border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-auto rounded-md border border-gray-200">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[200px]">Project Name</TableHead>
              <TableHead className="hidden md:table-cell">Clusters</TableHead>
              <TableHead className="hidden md:table-cell">Tags</TableHead>
              <TableHead className="hidden md:table-cell">Users</TableHead>
              <TableHead className="hidden md:table-cell">Teams</TableHead>
              <TableHead className="hidden md:table-cell">Alerts</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10 text-gray-500">
                  No projects found
                </TableCell>
              </TableRow>
            ) : (
              filteredProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium text-blue-600">
                    {project.name}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {project.clusters}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => handleAddTag(project.id)}
                    >
                      + Add Tags
                    </button>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {project.users} {project.users === 1 ? "User" : "Users"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {project.teams} {project.teams === 1 ? "Team" : "Teams"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {project.alerts} {project.alerts === 1 ? "Alert" : "Alerts"}
                  </TableCell>
                  <TableCell className="text-right space-x-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => console.log("Edit", project.id)}
                          className="cursor-pointer"
                        >
                          Edit Project
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log("View details", project.id)}
                          className="cursor-pointer"
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteProject(project.id)}
                          className="cursor-pointer text-red-600"
                        >
                          Delete Project
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteProject(project.id)}
                      className="hidden md:inline-flex text-gray-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8 text-sm text-gray-500 border-t pt-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-2 md:mb-0">System Status: <span className="text-green-600">All Good</span></div>
          <div>© 2025 EduLMS, Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
