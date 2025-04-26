import React from 'react'

const Home = () => {
    return (
        <>
            <div className="maincontainer">
                <div className="homedata">
                    <img src="https://i.ibb.co/xSqJSdqt/freaky-ahh-cat.jpg" alt="profile" className="profilepic" />
                    <h1 className="name">Jaivardhan</h1>
                    <p className="stack">Full-Stack Developer | MERN | MongoDB | JWT | Redux Toolkit | REST APIs | React 19</p>
                    <div className="socials">
                        <a href="#"><i className="fa fa-envelope"></i></a>
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>

                    </div>
                </div>




            </div>
            <div className="container">
                <div className="rowdiv">
                    <div className="myimgdiv">
                        <img src="https://i.ibb.co/xSqJSdqt/freaky-ahh-cat.jpg" alt="profile" className='myimage' />
                    </div>
                    <div className="aboutusdiv">
                        <p className='aboutustext'>
                            Hi, I'm Jaivardhan, a self-taught MERN Stack Developer and a B.Sc.
                             graduate, eager to explore opportunities in Web Development.
                              I’m committed to expanding my knowledge and skills, aiming to fill my life with amazing memories and continuous learning.
                               I hold a Bachelor's degree in Science and have a passion for web technologies like MongoDB, JWT, Redux Toolkit, and React.
                        </p>
                        <p>Outside of coding, I enjoy watching anime, diving into gaming culture, 
                            and experimenting with new technologies. In the future,
                             I plan to continue enhancing my skills as a developer,
                              exploring cutting-edge technologies,
                               and contributing to meaningful projects that positively impact people's lives.</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home