import MagiCode from "../assets/magiCode.svg";
import Externatic from "../assets/externatic.png";
import NaosGuard from "../assets/naosGuard.png";
import LazyDay from "../assets/lazyDay.png";

export default function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "Externatic — Plateforme de recrutement",
      text: "Projet réalisé en équipe de trois développeurs dans le cadre de la Wild Code School, en méthode Agile/Scrum. Contribution à la structuration du backlog, à la définition des besoins utilisateurs et à la coordination fonctionnelle.",
      stack: "React, JavaScript, Node.js, Express, SQL, Tailwind",
      image: Externatic,
      features:
        "Gestion de deux profils : candidat (création, consultation, suppression de compte) et entreprise (gestion des offres d'emploi avec opérations CRUD). Parcours utilisateur structuré, travail sur l'expérience et l'accessibilité.",
      defi: "Cadrage des fonctionnalités, priorisation des tâches et pilotage en méthode Agile tout au long du développement.",
      link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-careercatchers",
    },
    {
      id: 2,
      title: "NaosGuard — Plateforme de petsitting",
      text: "Projet réalisé en autonomie, de la définition des besoins jusqu'au développement complet. Structuration des parcours utilisateurs, prototypage, développement full-stack et recette fonctionnelle.",
      stack: "React, JavaScript, Node.js, Express, SQL, Tailwind",
      image: NaosGuard,
      features:
        "Création de comptes utilisateurs, authentification, consultation et dépôt d’avis après une garde. Possibilité pour les visiteurs non connectés de consulter les retours clients. Parcours simple et intuitif.",
      defi: "Cadrage du projet, conception UX, priorisation des fonctionnalités et développement en autonomie selon une approche produit.",
      link: "https://github.com/bastien-fournier/V2-Site-Petsitting",
    },
    {
      id: 3,
      title: "Holiday Planner — Jours fériés dans le monde",
      text: "Projet d’équipe mené à trois développeurs dans le cadre de la Wild Code School, en méthode Agile/Scrum. Contribution à la structuration des parcours utilisateurs, à l’intégration d’API et à l’organisation des sprints.",
      stack: "React, JavaScript",
      image: LazyDay,
      features:
        "L’utilisateur peut sélectionner un pays et une année pour afficher les jours fériés correspondants, grâce à une API publique. Interface claire avec affichage dynamique des résultats.",
      defi: "Travail collaboratif en sprint, intégration d’API externe, gestion du planning et coordination pour assurer la cohérence fonctionnelle de l’outil.",
      link: "https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-holidays_planner",
    },
    {
      id: 4,
      title: "MagiCode — Jeu interactif divinatoire",
      text: "Premier projet d’équipe réalisé à trois développeurs en début de formation. Conception d’un mini-jeu interactif basé sur une logique aléatoire, avec attention portée à la clarté fonctionnelle et à l’expérience utilisateur.",
      stack: "JavaScript",
      image: MagiCode,
      features:
        "L'utilisateur pose une question puis obtient une réponse aléatoire ('oui', 'non', 'peut-être'). Interface minimaliste et réactive, pensée pour un usage simple et immédiat.",
      defi: "Structuration d’un projet en équipe, gestion de la logique métier, premiers pas en JavaScript et restitution orale du projet en public.",
      link: "https://github.com/YohanGH/MagiCode",
    },
  ];

  return (
    <div className="w-full sm:w-1/3 md:w-3/4 mx-auto px-4 mt-5 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <div className="flex-1 p-4 sm:pr-4 mb-4 sm:mb-0">
            <h2 className="text-lg font-nunito font-bold mb-4">
              {project.title}
            </h2>
            <p className="mb-4">{project.text}</p>
            <p className="mb-4">{project.features}</p>
            <p className="mb-4">{project.defi}</p>
            <p className="text-sm text-gray-600 mb-4">
              Site développé avec {project.stack}
            </p>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-yellow-400 hover:shadow-lg transition duration-300">
                Voir plus
              </button>
            </a>
          </div>
          <div className="p-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-48 h-48 object-cover "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
