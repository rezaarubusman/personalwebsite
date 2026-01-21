const Footer = () => {
  return (
    <footer className="border-t bg-black text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <p className="text-sm text-muted-foreground">
            Dibuat dengan Loveable, React, React Router, shadcn/ui, dan Tailwind CSS
          </p>
          <p className="flex flex-col text-center text-sm text-muted-foreground">
            Tugas Code Challenge 2
          </p>  
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://linkedin.com/in/fahreza-aqsa-arubusman"
              className="text-sm text-muted-foreground hover:text-gray-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.gmail.com"
              className="text-sm text-muted-foreground hover:text-gray-100 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.whatsapp.com"
              className="text-sm text-muted-foreground hover:text-gray-100 transition-colors"
            >
              Whatsapp
            </a>
            <a
              href="https://www.instagram.com"
              className="text-sm text-muted-foreground hover:text-gray-100 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://archiveofourown.org/users/FahrezaArubusman/pseuds/FahrezaArubusman"
              className="text-sm text-muted-foreground hover:text-gray-100 transition-colors"
            >
              Archive of Our Own
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;