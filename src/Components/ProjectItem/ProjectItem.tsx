import { Component } from "react";
import "./ProjectItem.css";

const ProjectItem = (props: any) => {
  const { projectDetails } = props;
  const { projectId, imageURL, title, description } = projectDetails;
  return (
    <li className="project-item-container">
      <img
        src={imageURL}
        alt={`project-item ${projectId}`}
        className="project-item-image"
      />
      <div className="project-item-details-container ">
        <h1 className="project-item-title">{title}</h1>
        <p className="project-item-description">{description}</p>
      </div>
    </li>
  );
};

export default ProjectItem;
