export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 max-w-lg gap-4">
      <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-5xl">
        Mes Skills
      </h1>
      <h3 className="text-secondary text-xl sm:text-2xl">En développement</h3>

      <p className="mb-4 sm:mb-5  ">
        Voici un aperçu de mes compétences en développement web et des outils
        que j&apos;utilise régulièrement pour mener à bien les projets.
      </p>

      <ul className="list-disc list-inside space-y-2 ">
        <li>
          <strong>Développement Full-Stack</strong>: Je maîtrise le
          développement tant côté client qu&apos;en back-end.
        </li>
        <li>
          <strong>Travail d&apos;équipe</strong>: Je valorise la collaboration
          et la communication.
        </li>
        <li>
          <strong>UI/UX et utilisation de Figma</strong>: Mes applications sont
          esthétiques et intuitives.
        </li>
        <li>
          <strong>Outils de versionnage et collaboration</strong>:
          J&apos;utilise Git et GitHub efficacement.
        </li>
        <li>
          <strong>Méthodologie Agile/Scrum</strong>: Je m&apos;adapte aux
          changements de priorités pour des résultats continus.
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
