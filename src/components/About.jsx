export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-start p-4 max-w-lg gap-4">
        <h3 className="text-secondary text-2xl">
          Digital & Assurance • Gestion de projet
        </h3>
        <h1 className="font-playfair font-bold text-6xl">
          Hello, je m&apos;appelle Bastien
        </h1>

        <p>
          Issu du secteur de l’assurance, j’ai acquis une solide expertise
          métier en IARD et en assurance construction, aussi bien en compagnie
          qu’en cabinet de courtage. Cette expérience m’a permis de développer
          une excellente connaissance des contrats, des procédures
          réglementaires, ainsi qu’un vrai sens de l’analyse, du conseil et de
          la rigueur.
        </p>
        <p>
          Formé au développement web Full-Stack (HTML, CSS, JavaScript, React,
          Node.js), je dispose également des compétences techniques nécessaires
          à la compréhension des enjeux digitaux. Je m’intéresse
          particulièrement à la gestion de projet web, au lien entre équipes
          métier et développeurs, et à l&apos;amélioration continue des outils.
        </p>
        <p>
          Aujourd’hui, je souhaite m’investir dans des projets numériques où je
          peux mobiliser à la fois mes compétences fonctionnelles et techniques,
          et contribuer à faire avancer des solutions utiles, concrètes et
          innovantes.
        </p>

        <div className="flex mt-5">
          <a href="/CVBastienFournier.pdf" download="Bastien_Fournier_CV.pdf">
            <button className="bg-secondary text-black px-4 py-2 rounded mr-4 hover:bg-yellow-400 hover:shadow-lg transition duration-300">
              Télécharger mon CV
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/bastien-fournier-395643179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" text-black px-4 py-2 rounded border border-black hover:bg-gray-200 hover:shadow-lg transition duration-300">
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
