import Pic from "../assets/picPexels.jpg";
import MagiCode from "../assets/magiCode.svg";
import Externatic from "../assets/externatic.png";
import NaosGuard from "../assets/naosGuard.png";
import LazyDay from "../assets/lazyDay.png";

export default function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "Externatic",
      text: "Développement d’un site de recrutement pour un cabinet de recrutement destiné aux entreprises et candidats, réalisé en groupe de trois développeurs à la Wild Code School en utilisant la méthodologie Agile/Scrum.",
      stack: "React, JavaScript, Node.js, Express, SQL.",
      image: Externatic,
      features:
        "Gestion de deux profils (candidat et entreprise). Les candidats peuvent consulter et supprimer leur compte, tandis que les entreprises peuvent gérer leurs offres d'emploi (création, publication, suppression) avec des opérations CRUD et BREAD.",
      // defi: "Coordination des différents rôles et fonctionnalités tout en maintenant une architecture propre et évolutive sur le back-end et le front-end.",
      link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-careercatchers",
    },
    {
      id: 2,
      title: "NaosGuard",
      text: "Développement d’un site de services de petsitting, réalisé seul, avec pour objectif de présenter l’activité d’un petsitter.",
      stack: "React, JavaScript, Node.js, Express, SQL.",
      image: NaosGuard,
      features:
        "Les utilisateurs non connectés peuvent consulter les avis laissés par des propriétaires de chiens. Les utilisateurs peuvent se créer un compte, se connecter et laisser un avis après une garde.",
      link: "https://github.com/bastien-fournier/Naos-s-Guard-Pet-Sitting",
    },
    {
      id: 3,
      title: "Holidays Planner",
      text: "Développement d’un site d’information sur les jours fériés dans le monde, réalisé en groupe de trois développeurs avec l'aide de la méthodologie Agile/Scrum et en utilisant une API.",
      stack: "React, JavaScript",
      image: LazyDay,
      features:
        "Permet aux utilisateurs d'afficher les jours fériés d'une année pour un pays sélectionné.",
      link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-holidays_planner",
    },
    {
      id: 4,
      title: "MagiCode",
      text: "Développement d’un jeu sous forme de boule divinatoire, réalisé en groupe de trois développeurs pour notre premier projet de formation.",
      stack: "JavaScript",
      image: MagiCode,
      features:
        "L'utilisateur saisit une question et reçoit une réponse aléatoire ('oui', 'on', 'peut-être').",
      link: "https://github.com/YohanGH/MagiCode",
    },
  ];

  return (
    <div className=" w-2/3 mx-auto px-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-lg p-4 mb-14 flex flex-col sm:flex-row"
        >
          <div className="flex-1 pr-0 sm:pr-4 mb-4 sm:mb-0">
            <h2 className="text-lg font-nunito font-bold mb-4">
              {project.title}
            </h2>
            <p className="mb-4">{project.text}</p>
            <p className="mb-4">{project.features}</p>
            <p className="mb-4">{project.defi}</p>
            <p className="text-sm text-gray-600 mb-4">
              Site développé avec {project.stack}
            </p>
            <p className="mb-4">
              {" "}
              <a
                className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-300 ease-in-out"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet sur GitHub
              </a>
            </p>
          </div>
          <img
            src={project.image}
            alt="Image"
            className="w-48 h-48 object-cover" // Responsive image
          />
        </div>
      ))}
    </div>
  );
}
