export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-start p-4 max-w-lg gap-4">
      <h1 className="font-playfair font-bold text-6xl">Mes Skills</h1>
      <h3 className="text-secondary text-2xl">En développement</h3>

      <p className="mb-5">
        Voici un aperçu de mes compétences en développement web et des outils
        que j&apos;utilise régulièrement pour mener à bien les projets.
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>Développement Full-Stack</li>
        <li>Travail d&apos;équipe</li>
        <li>UI/UX et utilisation de Figma</li>
        <li>Outils de versionnage et collaboration</li>
        <li>Méthodologie Agile/Scrum</li>
      </ul>

      <div className="flex mt-5">
        <a href="https://github.com/bastien-fournier" target="_blank">
          <button className="bg-secondary text-black px-4 py-2 rounded mr-4 hover:bg-yellow-400 hover:shadow-lg transition duration-300">
            Voir mon GitHub
          </button>
        </a>
      </div>
    </div>
  );
}
