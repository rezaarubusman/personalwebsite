import type { Route } from "./+types/home";
import AppLayout from "~/components/layout/AppLayout";
import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/About";
import SkillCard from "~/components/SkillCard";
import ContactSection from "~/components/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fahreza Aqsa Arubusman" },
    {
      name: "description",
      content: "Personal profile & portfolio website",
    },
  ];
}

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <AboutSection />
      <SkillCard />
      <ContactSection />
    </AppLayout>
  );
}
