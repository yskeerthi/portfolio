import React from "react";
import { useLocation } from "react-router-dom";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import ProjectDetailsArea from "../components/Project/ProjectDetailsArea";
import Layout from "../layouts/Layout";

const PortfolioDetailsPage = () => {
  const location = useLocation();
  const project = location.state?.project || {}; // Default to empty object if no state

  // Edit Here: Add debug log to confirm data
  console.log("Project Data in PortfolioDetailsPage:", project);

  return (
    <Layout header={2} footer={1} className="" mainClassName="">
      {/* Edit Here: Pass dynamic title */}
      <BreadcrumbArea
        title={project.title || "Project Details"}
        subtitle={project.title || "Project Details"}
        className={"breadcrumb-area-two pt-175"}
        showShape={false}
      />
      <ProjectDetailsArea project={project} />
    </Layout>
  );
};

export default PortfolioDetailsPage;