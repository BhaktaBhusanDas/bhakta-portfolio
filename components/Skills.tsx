// components/Skills.tsx
import { TerraformIcon } from "./TechIcon";

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex items-center space-x-2">
        <TerraformIcon className="w-8 h-8 text-devops-paragraph" />
        <span className="text-lg font-medium">Terraform</span>
      </div>
      {/* Add other skills in similar fashion */}
    </div>
  );
}
