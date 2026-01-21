import Navigationbar from "~/components/navigationbar";
import type { Route } from "./+types/home";
import Footer from "~/components/footer";
import SkillCard from "~/components/skillcard";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";
import { skills } from "data/skills"; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile Fahreza" },
    { name: "description", content: "Website profile Fahreza Aqsa Arubusman" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigationbar />

      <main className="flex-1 bg-black py-8">
        <div className="container mx-auto px-4">

          {/* HERO */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Profile Fahreza Aqsa Arubusman
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Selamat datang di website profile saya
            </p>
          </section>

          {/* SEARCH (opsional / future use) */}
          <section className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search skills..."
                className="pl-10 bg-black border-gray-600 placeholder:text-gray-500"
              />
            </div>
          </section>

          {/* SKILLS GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
