// components/Skills.tsx
import { TerraformIcon } from "./TechIcon";
import { ReactElement } from "react";
import React from "react";

interface Skill {
  name: string;
  file: string;
}

const skills: Skill[] = [
  { name: "Terraform",      file: "terraform.svg" },
  { name: "Docker",         file: "docker.svg" },
  { name: "Kubernetes",     file: "kubernetes.svg" },
  { name: "GitHub Actions", file: "github-actions.svg" },
  { name: "Datadog",        file: "datadog.svg" },
  { name: "Linux",          file: "linux.svg" },
  { name: "Azure",          file: "azure.svg" },
  { name: "SQL Server",     file: "sql-server.svg" },
];

export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Skills Snapshot
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {skills.map(({ name, file }) => (
          <div
            key={name}
            className="flex flex-col items-center bg-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow text-black"
          >
            <img
              src={`/icons/${file}`}
              alt={name}
              className="w-12 h-12 mb-2 object-contain"
            />
            <span className="text-lg font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}