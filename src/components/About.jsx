export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-start p-4 max-w-lg">
        <h1 className="font-playfair text-4xl">
          Hello, mon prénom est Bastien Fournier
        </h1>
        <h3>Développeur Web || Full-Stack</h3>
        <p>
          Développeur web en reconversion, je suis formé en Full-Stack (HTML,
          CSS, JavaScript, React, Node.js) après plusieurs années
          d&apos;expérience en commerce. Passionné par les technologies et les
          projets innovants, je recherche des opportunités pour continuer à
          apprendre et contribuer à des projets stimulants.
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Resume
        </button>
      </div>
    </>
  );
}
