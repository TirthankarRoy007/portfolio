import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />
    <main className="relative">
      <Outlet />
    </main>
    <Footer />
  </div>
);
