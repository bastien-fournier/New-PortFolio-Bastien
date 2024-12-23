import { useState } from "react";

import Stabilo from "../assets/stabilo.png";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("Envoyer");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Envoi en cours...");

    const formData = new FormData(e.target);

    fetch("https://getform.io/f/bwnnngka", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Formulaire envoyé avec succès !");
          setFormStatus("Envoyer");
        } else {
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Une erreur s'est produite. Veuillez vérifier votre connexion.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-6 mt-10 mb-16"
    >
      <h2 className="text-2xl  text-black mb-6 text-center">
        Envoyez-moi un message
      </h2>
      <p
        style={{
          backgroundImage: `url(${Stabilo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100px",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        N’hésitez pas à me contacter pour en savoir plus sur mon parcours ou
        discuter de mes motivations !
      </p>
      <div className="mb-6 mt-4">
        <label className="block text-black  mb-2" htmlFor="name">
          Nom
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-transparent"
        />
      </div>

      <div className="mb-6">
        <label className="block text-black mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-transparent"
        />
      </div>

      <div className="mb-6">
        <label className="block text-black mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="4"
          className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none bg-transparent"
        />
      </div>

      <button
        type="submit"
        className="bg-secondary text-black px-4 py-2 rounded hover:bg-yellow-400 hover:shadow-lg transition duration-300"
      >
        {formStatus}
      </button>
    </form>
  );
}
