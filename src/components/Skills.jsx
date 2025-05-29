export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 max-w-lg gap-4">
      <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-5xl">
        Mes skills
      </h1>
      <h3 className="text-secondary text-xl sm:text-2xl">
        Expertise métier & relation client
      </h3>

      {/* <p className="mb-4 sm:mb-5  ">
        Voici un aperçu de mes compétences en développement web et des outils
        que j&apos;utilise régulièrement pour mener à bien les projets.
      </p> */}

      <ul className="list-disc list-inside space-y-2 ">
        <li>
          <strong>Assurance IARD & Construction</strong> : Maîtrise des
          produits, contrats et procédures, en compagnie et en cabinet de
          courtage.
        </li>
        <li>
          <strong>Analyse des besoins métiers </strong> : Capacité à comprendre,
          reformuler et structurer les attentes des utilisateurs.
        </li>
        <li>
          <strong>Relation client & pédagogie</strong> : Sens de l’écoute, de la
          communication claire et du conseil personnalisé.
        </li>
        {/* <li>
          <strong>Outils de versionnage et collaboration</strong> :
          J&apos;utilise Git et GitHub efficacement.
        </li> */}
        {/* <li>
          <strong>Méthodologie Agile/Scrum</strong> : Je m&apos;adapte aux
          changements de priorités pour des résultats continus.
        </li> */}
      </ul>
      <h3 className="text-secondary text-xl sm:text-2xl">
        Coordination & gestion de projet digital
      </h3>
      <ul className="list-disc list-inside space-y-2 ">
        <li>
          <strong>Méthodologie Agile / Scrum </strong> : Expérience de travail
          en sprint, gestion de backlog, rédaction de user stories.
        </li>
        <li>
          <strong>Suivi fonctionnel </strong> : Participation à la recette,
          tests utilisateurs, amélioration continue.
        </li>
        <li>
          <strong>Collaboration transverse</strong> : Capacité à faire le lien
          entre métiers, équipes techniques et utilisateurs finaux.
        </li>
      </ul>
      <h3 className="text-secondary text-xl sm:text-2xl">
        Développement web & outils numérique
      </h3>
      <ul className="list-disc list-inside space-y-2 ">
        <li>
          <strong>Développement Full-Stack</strong> : HTML, CSS, JavaScript,
          React, Node.js, SQL
        </li>
        <li>
          <strong>UX/UI & prototypage</strong> : Utilisation de Figma pour
          concevoir des interfaces claires et intuitives.
        </li>
        <li>
          <strong>Outils collaboratifs</strong> : Git, GitHub, Trello, Notion.
        </li>
      </ul>
      <div className="flex mt-5">
        <a
          href="https://github.com/bastien-fournier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-yellow-400 hover:shadow-lg transition duration-300 text-sm sm:text-base">
            Voir mon GitHub
          </button>
        </a>
      </div>
    </div>
  );
}
