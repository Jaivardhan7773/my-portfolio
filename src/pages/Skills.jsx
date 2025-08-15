import React from "react";
import SpotlightCard from "../components/Spotlightcard/SpotlightCard ";
import TextType from '../components/texttype/TextType'
import html from '../assets/skills/html.webp'
import css from '../assets/skills/css.webp'
import js from '../assets/skills/js.webp'
import tailwind from '../assets/skills/tailwind.png'
import react from '../assets/skills/react.webp'
import redux from '../assets/skills/redux.webp'
import zustand from '../assets/skills/zustand.png'
import bits from '../assets/skills/bits.webp'
import bootstrap from '../assets/skills/bootstrap.webp'
import node from '../assets/skills/node.webp'
import express from '../assets/skills/express.webp'
import mongodb from '../assets/skills/mongodb.webp'
import mongoose from '../assets/skills/mongoose.png'
import git from '../assets/skills/git.webp'
import github from '../assets/skills/github.webp'
import socket from '../assets/skills/socket.webp'
import npm from '../assets/skills/npm.webp'
import vscode from '../assets/skills/vscode.webp'
import api from '../assets/skills/api.svg'
import vercel from '../assets/skills/vercel.png'
import netlify from '../assets/skills/netlify.svg'
import mongodbcompass from '../assets/skills/mongodbcompass.png'
import postman from '../assets/skills/postman.webp'
import cloudnary from '../assets/skills/cloudnary.png'

import webdev from '../assets/skills/webdev.png'
import reactdev from '../assets/skills/reactdev.png'
import backdev from '../assets/skills/backdev.png'
import fulldev from '../assets/skills/fulldev.png'



const roles = [
  {
    title: "Web Developer",
    image: webdev,
    duration:500,
  },
  {
    title: "React Developer",
    image: reactdev,
    duration:700,
  },
  {
    title: "Backend Developer",
    image: backdev,
    duration:900,
  },
  {
    title: "Full Stack Developer",
    image: fulldev,
    duration:1100,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "React bits",
    icon: bits,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHup",
    icon: github,
  },
  {
    name: "Socket io",
    icon: socket,
  },
  {
    name: "Npm",
    icon: npm,
  },
];


const tools = [
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Rest API",
    icon: api,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
  {
    name: "Mongodb Compass",
    icon: mongodbcompass,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Cloudinary",
    icon: cloudnary,
  },
];



const DeveloperCard = ({ title, image , duration }) => (
  <div className="skill-col"  data-aos="fade-right" data-aos-duration={duration}>
    <img src={image} alt={title || "Jaivardhan singh"} className="block mx-auto animate-spin" style={{ maxHeight: "50px",
       maxWidth: "50px",
        margin: "10px" 
            }} />
    <p className="skill-title fs-4 fw-normal">{title}</p>
  </div>
);


const Skills = () => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(5 8 22", height: "fit-content" }} >
        <div className="container" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <div className="row"  style={{ display: "flex" }}>
            {roles.map((role, index) => (
              <div className="col"
              key={role.title + index}
              style={{boxShadow: '0px 20px 10px rgba(0, 0, 0, 0.2)'}}>
                <SpotlightCard
                  key={index}
                  className="custom-spotlight-card "
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <DeveloperCard title={role.title} image={role.image} />
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>


        <h1 className="text-center text-white py-10" id="skills">     <TextType
          text={["Skills"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        /> </h1>

        <div className="container" style={{ paddingTop: "50px" }}>
          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {technologies.map((tech, index) => (
              <div className="col" key={index}>
                <div className="tech" style={{ textAlign: "center", padding: "40px" }}>
                  <img src={tech.icon} alt={tech.name || "Jaivardhan singh"} className="block mx-auto" data-aos="zoom-out-up"  style={{ width: "70px", height: "60px" }} />
                  <span className="tech-title"  data-aos="zoom-out-up" style={{ color: "white", display: "block", marginTop: "5px" }}>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "50px" }}>
            {tools.map((tool, index) => (
              <div className="col" key={index}>
                <div className="tech" style={{ textAlign: "center", padding: "10px" }}>
                  <img src={tool.icon} alt={tool.name || "Jaivardhan singh"}  className="block mx-auto" data-aos="zoom-out-up"  style={{ width: "60px", height: "60px"  }} />
                  <span className="tech-title"  data-aos="zoom-out-up" style={{ color: "white", display: "block", marginTop: "5px" }}>
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </>
  );
};

export default Skills;
