import { useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";
import { skills } from "data/skills";
import SkillsCard from "./SkillsCard";
import type { Skill } from "types/skills";

export default function SkillsSection() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // 🔁 Debounce input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  // 🔍 Filter skills
  const filteredSkills: Skill[] = useMemo(() => {
    return skills.filter((skill) =>
      skill.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  // 🧱 Build JSX without map
  const skillCards: ReactNode[] = [];

  for (const skill of filteredSkills) {
    if (!skill) continue;

    skillCards.push(
      <SkillsCard key={skill.id} skill={skill} />
    );
  }

  return (
    <section id="skills" className="py-24 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Skills
      </h2>

      {/* Search */}
      <div className="max-w-md mx-auto mb-12 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search skills..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 bg-black border-gray-600 placeholder:text-gray-500"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCards.length > 0 ? (
          skillCards
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Skill tidak ditemukan
          </p>
        )}
      </div>
    </section>
  );
}
