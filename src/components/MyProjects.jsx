import Pic from "../assets/picPexels.jpg";

export default function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "Externatic",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      stack: "JavaScript, Node.js, Express",
      image: Pic,
    },
    {
      id: 2,
      title: "NaosGuard",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
      stack: "JavaScript, Node.js, Express",
      image: Pic,
    },
    {
      id: 3,
      text: "Projet 3 description.",
      image: Pic,
    },
  ];

  return (
    <div className="max-w-full mx-auto px-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-lg p-4 mb-14 flex flex-col sm:flex-row"
        >
          <div className="flex-1 pr-0 sm:pr-4 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p>{project.text}</p>
            <p className="text-sm text-gray-600">
              Site développé avec {project.stack}
            </p>
          </div>
          <img
            src={project.image}
            alt="Image"
            className="w-full h-auto object-cover sm:max-w-xs" // Responsive image
          />
        </div>
      ))}
    </div>
  );
}
