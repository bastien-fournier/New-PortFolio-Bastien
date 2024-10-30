export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-start p-4 max-w-lg gap-4">
        <h3 className="text-secondary text-2xl">
          Développeur Web || Full-Stack
        </h3>
        <h1 className="font-playfair font-bold text-6xl">
          Hello, je m&apos;appelle Bastien
        </h1>

        <p>
          Développeur web en reconversion, je suis formé en Full-Stack (HTML,
          CSS, JavaScript, React, Node.js) après plusieurs années
          d&apos;expérience en commerce et en relation client, notamment dans le
          secteur de l&apos;assurance.
        </p>
        <p>
          Cette expérience m&apos;a permis de développer un sens aigu de
          l&apos;écoute, de la résolution de problèmes et de la relation
          commerciale, des compétences que j&apos;applique aujourd&apos;hui dans
          mes projets de développement.
        </p>
        <p>
          Passionné par les technologies et les projets innovants, je recherche
          des opportunités pour continuer à apprendre, mettre à profit mon
          expertise relationnelle, et contribuer à des projets stimulants.
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
