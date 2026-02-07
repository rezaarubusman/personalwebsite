import type { Skill } from "types/skills";

interface SkillCardProps {
  skill?: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  if (!skill) return null;

  return (
    <div className="bg-neutral-900 border border-neutral-700 p-4 rounded-lg">
      <img
        src={skill.image}
        alt={skill.name}
        className="w-10 h-10 object-contain mb-3"
      />
      <h3 className="font-semibold">{skill.name}</h3>
      <p className="text-sm text-gray-400">{skill.description}</p>
      <span className="text-xs text-gray-500">{skill.category}</span>
    </div>
  );
}
