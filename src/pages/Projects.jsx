const projects = [
    {
        name: "AizenX",
        description: "An E-Learning platform with user roles, blog system, admin panel, and fake payment integration. Built using the MERN stack.",
        link: "https://aizenx.netlify.app",
        image: "https://i.ibb.co/5WgsqN58/Screenshot-2025-05-05-192142.png",
    },
    {
        name: "SpeedTalk",
        description: "A real-time chat app with rooms, typing indicator, and emoji support using Socket.IO and React.",
        link: "https://speedtalk.netlify.app",
        image: "https://i.ibb.co/n8zrxqkg/ae220394-8f76-4b9f-b5b7-1a73d5b3fa68.png",
    },
    {
        name: "AstraJay",
        description: "A futuristic portfolio and experimental UI playground built with animations, dark mode, and responsive layout.",
        link: "https://astrajay.netlify.app",
        image: "https://i.ibb.co/s96bWsX4/Screenshot-2025-08-04-142317.png",
    },
];

const Projects = () => {
    return (
        <>
            <section id="projects" className="bg-gray-900 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 border-b pb-4 inline-block border-amber-500">My Projects</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col justify-between h-60">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                        <p className="text-sm text-gray-300">{project.description}</p>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block text-amber-400 hover:text-white transition font-medium"
                                    >
                                        Visit Project &rarr;
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