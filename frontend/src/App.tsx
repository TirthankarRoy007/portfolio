import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      { path: "projects", element: <Projects /> },
      { path: "skills", element: <Skills /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export const App = () => <RouterProvider router={router} />;
