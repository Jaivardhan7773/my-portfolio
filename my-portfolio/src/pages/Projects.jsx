import { useState } from "react";
import aizenx from '../assets/projectss/aizenx.png';
import speedtalk from '../assets/projectss/speedtalk.png';
import astrajay from '../assets/projectss/astrajay.png';
import philosophy from '../assets/projectss/philosophy.png';
const MAX_VISIBLE_TECH = 4;

const projects = [
    {
        name: "AizenX",
        level: "Advance",
        description: "AizenX is an advanced E-Learning platform built using the MERN stack, featuring a clean, responsive UI and a seamless user experience. It includes role-based access control (Users, Editors, Admins), a dynamic blog system, a fully functional admin panel, and fake payment integration for premium content. Every feature is designed with scalability, clarity, and modern usability in mind—making it one of the most structured and feature-rich platforms I've built.",
        link: "https://aizenx.netlify.app",
        image: aizenx,
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT Authentication",
            "CSS3",
            "Bootstrap 5",
            "Axios",
            "React Router",
            "React Icons",
            "MongoDB Atlas",
            "Netlify (Frontend Deployment)",
            "Render (Backend Deployment)",
            "Cloudinary (for images)",
            "RESTful APIs"
        ],
    },
    {
        name: "SpeedTalk",
        level: "Advance",
        description: "SpeedTalk Shitt is a sleek, real-time chat application built with React and Socket.IO, offering a smooth and responsive user experience. It features chat rooms, a live typing indicator, and full emoji support to make conversations more interactive and fun. Designed with clean UI and real-time performance in mind, it's one of the most engaging and technically satisfying communication apps I’ve built.",
        link: "https://speedtalk.netlify.app",
        image: speedtalk,
        tech: [
            "React.js",
            "Socket.IO",
            "Node.js",
            "Express.js",
            "CSS3",
            "Emoji Picker",
            "Real-Time Typing Indicator",
            "Chat Rooms",
            "RESTful APIs",
            "Netlify (Frontend Deployment)",
            "Render (Backend Deployment)"
        ],

    },
    {
        name: "AstraJay",
        level: "UI",
        description: "Astra Jay is a cutting-edge portfolio site and experimental UI playground, built with futuristic design concepts, smooth animations, and a fully responsive layout. It showcases creative front-end experimentation and serves as a sandbox for trying out bold design ideas and micro-interactions. This is where creativity meets code—an artistic, high-performance space crafted to impress and inspire.",
        link: "https://astrajay.netlify.app",
        image: astrajay,
        tech: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "Bootstrap 5",
            "Responsive Web Design"
        ],
    },
    {
        name: "Philosophy",
        level: "UI",
        description: "Philosophy is a beautifully crafted web application built with React, CSS, and Bootstrap 5. It showcases one of the best and most responsive UIs I’ve ever created—designed with attention to detail, fluid responsiveness, and a clean, modern layout. Whether on desktop or mobile, the experience remains smooth, elegant, and engaging, making it a perfect blend of performance and aesthetics.",
        link: "https://philosophy-gamma.vercel.app",
        image: philosophy,
        tech: [
            "React.js",
            "CSS3",
            "Bootstrap 5",
            "React Router",
            "Responsive Web Design",
            "Modern UI/UX",
            "Netlify (Deployment)"
        ],
    }
];

const Projects = () => {
    return (
        <>
            <section id="projects" className="bg-gray-900 text-white py-16 px-4">



                <div className="max-w-6xl mx-auto  overflow-hidden">



                    <section className=" py-[20px] dark:bg-dark">
                        <div className="mx-auto px-4 sm:container">
                            <div className="border-l-[5px] border-primary pl-5">
                                <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                    MY WORK
                                </p>
                                <h2 className="mb-2 text-2xl font-semibold  dark:text-white">
                                    PROJECTS.
                                </h2>
                                <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                    Following projects showcases my skills and experience through real-world examples of my work.
                                    Each project is briefly described with links to code repositories and live demos in it.
                                    It reflects my ability to solve complex problems, work with different technologies,
                                    and manage projects effectively.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* <h2 className="text-3xl sm:text-4xl font-bold mb-10 border-b pb-4 inline-block border-amber-500">My Projects</h2> */}
                    <div className="grid gap-8 sm:grid-cols-2 pt-5 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 m">
                                <img src={project.image} alt={project.name || "Jaivardhan singh "} loading="lazy" className="w-full h-60 object-cover" />
                                <div className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{project.name} (<strong className="text-blue-800">{project.level}</strong>)</h3>
                                        <div className="flex flex-wrap gap-1 mb-4  relative group">
                                            {project.tech.slice(0, MAX_VISIBLE_TECH).map((item, index) => (
                                                <span
                                                    key={index}
                                                    className="rounded-full bg-zinc-700 text-white px-3 py-1 text-xs "
                                                >
                                                    {item}
                                                </span>
                                            ))}

                                            {project.tech.length > MAX_VISIBLE_TECH && (
                                                <div className="relative me-30">
                                                    <span className="rounded-full bg-amber-500 text-black px-3 py-1 text-xs cursor-pointer">
                                                        +{project.tech.length - MAX_VISIBLE_TECH} more
                                                    </span>

                                                    {/* Tooltip */}
                                                    <div className="absolute z-10 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-3 py-2 top-full left-0 mt-1 w-max max-w-xs">
                                                        {project.tech.slice(MAX_VISIBLE_TECH).map((item, index) => (
                                                            <div key={index}>{item}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-300">{project.description}</p>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 px-4 py-2 justify-center  bg-blue-500 rounded-full inline-flex items-center gap-2 text-white hover:bg-blue-600 transition"
                                    >
                                        Visit Project <i className="fa-solid fa-link text-white" />
                                    </a>

                                </div>

                            </div>

                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects