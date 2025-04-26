import React from "react";
import { ProgressBar } from "react-bootstrap";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const Skills = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">My Skills</h2>

      {/* Programming Languages */}
      <div className="mb-4">
        <h4>Programming Languages</h4>
        <ul className="list-unstyled">
          <li><SiJavascript /> JavaScript - <ProgressBar now={90} label="90%" /></li>
          <li><SiHtml5 /> HTML5 - <ProgressBar now={95} label="95%" /></li>
          <li><SiCss3 /> CSS3 - <ProgressBar now={85} label="85%" /></li>
        </ul>
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-4">
        <h4>Frameworks & Libraries</h4>
        <ul className="list-unstyled">
          <li><FaReact /> React - <ProgressBar now={80} label="80%" /></li>
          <li><FaNodeJs /> Node.js - <ProgressBar now={70} label="70%" /></li>
        </ul>
      </div>

      {/* Databases */}
      <div className="mb-4">
        <h4>Databases</h4>
        <ul className="list-unstyled">
          <li><SiMongodb /> MongoDB - <ProgressBar now={75} label="75%" /></li>
        </ul>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-4">
        <h4>Tools & Technologies</h4>
        <ul className="list-unstyled">
          <li><FaGitAlt /> Git - <ProgressBar now={90} label="90%" /></li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="mb-4">
        <h4>Soft Skills</h4>
        <ul className="list-unstyled">
          <li>Teamwork & Collaboration</li>
          <li>Problem-Solving</li>
          <li>Communication</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
