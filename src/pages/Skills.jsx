import React from "react";
import SpotlightCard from "../components/Spotlightcard/SpotlightCard ";
import TextType from '../components/texttype/TextType'
const roles = [
  {
    title: "Web Developer",
    image: "https://mern-rajesh-portfolio.web.app/assets/web.png",
    duration:500,
  },
  {
    title: "React Developer",
    image: "https://mern-rajesh-portfolio.web.app/assets/frontend.png",
    duration:700,
  },
  {
    title: "Backend Developer",
    image: "https://mern-rajesh-portfolio.web.app/assets/backend.png",
    duration:900,
  },
  {
    title: "Full Stack Developer",
    image: "https://mern-rajesh-portfolio.web.app/assets/fullStack.png",
    duration:1100,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-html5-40-1175193.png?f=webp&w=512",
  },
  {
    name: "CSS 3",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=512",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-2752148-2284965.png?f=webp&w=512",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png",
  },
  {
    name: "React JS",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=512",
  },
  {
    name: "Redux",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-redux-283024.png?f=webp&w=512",
  },
  {
    name: "Zustand",
    icon: "https://miro.medium.com/v2/resize:fit:800/1*MX7sS67n80ViuJlNewAmuA.png",
  },
  {
    name: "React bits",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-react-13235229-10918763.png?f=webp&w=512",
  },

  {
    name: "Bootstrap 5",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-7-1175254.png?f=webp&w=512",
  },
  {
    name: "Node JS",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=webp&w=512",
  },
  {
    name: "Express JS",
    icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-11217744-9200748.png?f=webp&w=512",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=webp&w=512",
  },
  {
    name: "Mongoose",
    icon: "https://img.icons8.com/?size=96&id=gKfcEStXI1Hm&format=png",
  },
  {
    name: "Git",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=512",
  },
  {
    name: "GitHup",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-github-40-432516.png?f=webp&w=512",
  },
  {
    name: "Socket io",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-socket-54-282608.png?f=webp&w=512",
  },
  {
    name: "Npm",
    icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/npm-11796944-9632855.png?f=webp&w=512",
  },
];

const tools = [
  {
    name: "VS Code",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-vscode-13235441-10918879.png?f=webp&w=512",
  },
  {
    name: "Rest API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://flow-public.nimbuspop.com/flow-apps/vercel.png",
  },
  {
    name: "Netlify",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  },
  {
    name: "Mongodb Compass",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tools/mongodbCompass.png",
  },
  {
    name: "Postman",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png?f=webp&w=512",
  },
  {
    name: "Cloudinary",
    icon: "https://miro.medium.com/v2/resize:fit:1000/1*7CrSGB37vYF6kWga4PbJGA.png",
  },
];


const DeveloperCard = ({ title, image , duration }) => (
  <div className="skill-col"  data-aos="fade-right" data-aos-duration={duration}>
    <img src={image} alt={title} className="block mx-auto animate-spin" style={{ maxHeight: "50px",
       maxWidth: "50px",
        margin: "10px" 
            }} />
    <h4 className="skill-title">{title}</h4>
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
                  <img src={tech.icon} alt={tech.name} className="block mx-auto" data-aos="zoom-out-up"  style={{ width: "70px", height: "60px" }} />
                  <span className="tech-title"  data-aos="zoom-out-down" style={{ color: "white", display: "block", marginTop: "5px" }}>
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
                  <img src={tool.icon} alt={tool.name}  className="block mx-auto" data-aos="zoom-out-up"  style={{ width: "60px", height: "60px"  }} />
                  <span className="tech-title"  data-aos="zoom-out-down" style={{ color: "white", display: "block", marginTop: "5px" }}>
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
