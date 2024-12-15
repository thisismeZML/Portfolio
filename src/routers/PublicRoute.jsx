import React from "react";
import PublicLayout from "../components/PublicLayout";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ResumePage from "../Pages/ResumePage";
import ProjectsPage from "../Pages/ProjectsPage";
import ContactPage from "../Pages/ContactPage";
import HireMePage from "../Pages/HireMePage";

const PublicRoute = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "hireme", element: <HireMePage /> },
    ],
  },
];

export default PublicRoute;
