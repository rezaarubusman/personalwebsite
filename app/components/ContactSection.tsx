import { Button } from "~/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-neutral-900 text-center px-4"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Let’s Work Together
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        Tertarik bekerja sama, diskusi project, atau sekadar ngobrol soal
        teknologi? Jangan ragu untuk menghubungi saya.
      </p>

      <Button asChild size="lg">
        <a href="mailto:fahre@example.com" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Contact Me
        </a>
      </Button>
    </section>
  );
}
