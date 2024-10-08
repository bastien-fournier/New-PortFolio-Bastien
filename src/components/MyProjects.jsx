import Pic from "../assets/picPexels.jpg";

export default function MyProjects() {
  const projects = [
    {
      id: 1,
      text: "Projet 1 description.",
      image: Pic,
    },
    {
      id: 2,
      text: "Projet 2 description.",
      image: Pic,
    },
    {
      id: 3,
      text: "Projet 3 description.",
      image: Pic,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-lg p-5 flex mb-4"
        >
          <p className="flex-1 pr-4">{project.text}</p>
          <img
            src={project.image}
            alt="Image"
            className="w-1/3 h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
