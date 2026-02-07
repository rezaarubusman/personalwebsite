import { Button } from "~/components/ui/button";

export default function HeroSection() {
  return (
    <section className="text-center py-24">
      <h1 className="text-4xl tracking-wider md:text-5xl font-bold mb-6">
        Fahreza Aqsa Arubusman
      </h1>

      <p className= "text-2xl tracking-wider text-gray-400 mx-auto mb-8">
        Fullstack Developer • PostgreSQL • Express • React • NodeJS
      </p>

      <div className="flex justify-center gap-4">
        <Button asChild>
          <a href="#contact">Contact Me</a>
        </Button>

        <Button asChild>
          <a href="#skills">View Skills</a>
        </Button>
      </div>
    </section>
  );
}
