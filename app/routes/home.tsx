import type { Route } from "./+types/home";
import AppLayout from "~/components/layout/AppLayout";
import HeroSection from "~/components/herosection";
import AboutSection from "~/components/about";
import SkillsSection from "~/components/skillcard";
import ContactSection from "~/components/contactsection";

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
      <SkillsSection />
      <ContactSection />
    </AppLayout>
  );
}
