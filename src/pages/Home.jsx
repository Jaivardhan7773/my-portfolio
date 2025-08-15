import TextPressure from '../components/textpressure/TextPressure'
import TextType from '../components/texttype/TextType';
import Magnet from '../components/magnetbutton/Magnet'
// import pfp from '../assets/pfp.webp'
import profile from '../assets/profilenew.jpg'
import avatar from '../assets/myavatarnew.png'
const Home = () => {
    return (
        <>

            <div className="maincontainer" id='home'>
                <div className="homedata">
                    <img src={avatar} alt="Jaivardhan singh profile image" className="profilepic block mx-auto" data-aos="fade-up"
                        data-aos-duration="400" />
                    {/* <h1 className="name">Jaivardhan</h1> */}
                    <div data-aos="fade-up"
                        data-aos-duration="500" style={{ position: 'relative', width: "100%", display: "flex", justifyContent: "center" }}>

                        <TextPressure
                            text="Jaivardhan!"
                            flex={true}
                            alpha={false}
                            stroke={true}
                            width={false}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#fcfcfcff"
                            maxFontSize={5}
                        />
                    </div>

                    <div className="stack">

                        <TextType
                            text={["Full-Stack Developer | MERN | MongoDB | JWT | Redux Toolkit | REST APIs | React 19"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                        />

                    </div>
                    <div className="socials">
                        <a href="mailto:jaivardhansinghrathore17@gmail.com" aria-label="Send email to Jaivardhan Singh"><i data-aos="fade-up"
                            data-aos-duration="500" className="fa fa-envelope social-icon" ></i></a>
                        <a href="https://github.com/Jaivardhan7773" target='_blank' aria-label="Visit Jaivardhan Singh's GitHub profile"><i data-aos="fade-up"
                            data-aos-duration="600" className="fa-brands fa-github social-icon"></i></a>
                        <a href="https://www.linkedin.com/in/jaivardhan7773/" target='_blank' aria-label="Visit Jaivardhan Singh's LinkedIn profile"><i data-aos="fade-up"
                            data-aos-duration="700" className="fa-brands fa-linkedin social-icon"></i></a>
                        <a href="https://www.instagram.com/jaivardhan7773_/" target='_blank' aria-label="Visit Jaivardhan Singh's Instagram profile"><i data-aos="fade-up"
                            data-aos-duration="800" className="fa-brands fa-instagram social-icon"></i></a>

                    </div>

                    <div className="text-center pt-2">
                        <Magnet padding={50} disabled={false} magnetStrength={50}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://drive.google.com/file/d/17K0CHuwaTvQ5V5DOMktT1G1WVgIJWlCH/view?usp=drive_link"
                            >
                                <button data-aos="fade-up"
                                    data-aos-duration="1000" className='border border-white dark:border-dark-2 hoverBtn inline-flex items-center justify-center py-1 px-3 text-base font-medium disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'
                                    style={{ borderRadius: "20px" }}>
                                    Get resume
                                    <span className="mr-[10px] ps-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-arrow-up-right"
                                        >
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </span>

                                </button>
                            </a>
                        </Magnet>
                    </div>
                </div>
            </div>


            <div id='about' style={{ backgroundColor: "rgb(5 8 22", paddingTop: "50px" }}>

                <p className="text-neutral-400 text-lg text-center " data-aos="fade-right" data-aos-duration="500" style={{ marginBottom: "-5px" }}>Introduction</p>
                <h1 className="text-white text-center pb-5" data-aos="fade-right" data-aos-duration="1000"> Overview.</h1>
                <div className="container">
                    <div className="rowdiv">
                        <div className="myimgdiv" data-aos="fade-up"
                            data-aos-duration="500">
                            <img src={profile} alt="Jaivardhan Singh about us profile" className='myimage' />
                        </div>
                        <div className="aboutusdiv" data-aos="fade-up"
                            data-aos-duration="1000">
                            <p className='aboutustext'  >
                                Hi, I'm <strong>Jaivardhan Singh</strong>, a <strong>MERN Stack Developer</strong> and a <strong>B.Sc. graduate</strong>, eager to explore opportunities in <strong>Web Development</strong>.
                                I have completed <strong>6 months of hands-on MERN Stack training</strong> at <strong>Excellence Technology, Mohali</strong>, where I built several <strong>real-world projects</strong> and strengthened my full-stack development skills.
                                I’m committed to <strong>expanding my knowledge</strong> and <strong>continuous learning</strong>, aiming to fill my life with amazing memories and growth.
                                I have a passion for <strong>modern web technologies</strong> like <strong>MongoDB</strong>, <strong>JWT</strong>, <strong>Redux Toolkit</strong>, and <strong>React</strong>.
                            </p>
                            <p>Outside of coding, I enjoy watching anime, diving into gaming culture,
                                and experimenting with new technologies. In the future,
                                I plan to continue enhancing my skills as a developer,
                                exploring cutting-edge technologies,
                                and contributing to meaningful projects that positively impact people's lives.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home