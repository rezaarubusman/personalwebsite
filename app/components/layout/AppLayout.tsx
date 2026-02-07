import Navigationbar from "../Navigationbar";
import Footer from "../Footer";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigationbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
