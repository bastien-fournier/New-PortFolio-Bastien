export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-start p-4 max-w-lg gap-4">
      <h1 className="font-playfair font-bold text-6xl">Mes Skills</h1>
      <h3 className="text-secondary text-2xl">En développement</h3>

      <p className="mb-5">
        Voici un aperçu de mes compétences en développement web et des outils
        que j&apos;utilise régulièrement pour mener à bien les projets.
      </p>

      {/* <p className="mb-5">
        En tant que développeur passionné, j&apos;ai acquis une solide expertise
        dans divers langages de programmation et technologies, ce qui me permet
        de créer des applications web dynamiques et responsive. Ma capacité à
        collaborer avec des équipes multidisciplinaires et à comprendre les
        besoins des utilisateurs est essentielle pour livrer des projets de
        haute qualité.
      </p> */}

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Développement Full-Stack</strong>: Je maîtrise le
          développement tant côté client qu&apos;en back-end, ce qui me permet
          d&apos;avoir une vision globale des projets.
        </li>
        <li>
          <strong>Travail d&apos;équipe</strong>: Je valorise la collaboration
          et la communication au sein des équipes, ce qui favorise un
          environnement de travail productif et créatif.
        </li>
        <li>
          <strong>UI/UX et utilisation de Figma</strong>: Je m&apos;assure que
          mes applications soient non seulement fonctionnelles mais aussi
          esthétiques et intuitives pour l&apos;utilisateur.
        </li>
        <li>
          <strong>Outils de versionnage et collaboration</strong>:
          J&apos;utilise Git et GitHub pour gérer le code et travailler en
          équipe efficacement.
        </li>
        <li>
          <strong>Méthodologie Agile/Scrum</strong>: Je suis familiarisé avec
          les pratiques Agile, ce qui m&apos;aide à m&apos;adapter rapidement
          aux changements de priorités et à livrer des résultats continus.
        </li>
      </ul>

      <div className="flex mt-5">
        <a
          href="https://github.com/bastien-fournier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-secondary text-black px-4 py-2 rounded mr-4 hover:bg-yellow-400 hover:shadow-lg transition duration-300">
            Voir mon GitHub
          </button>
        </a>
      </div>
    </div>
  );
}
