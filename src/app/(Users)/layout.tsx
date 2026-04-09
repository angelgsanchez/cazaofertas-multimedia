import { Footer } from "@/components/layout/Footer";
import { NavbarUser } from "@/components/layout/NavBarUser";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}