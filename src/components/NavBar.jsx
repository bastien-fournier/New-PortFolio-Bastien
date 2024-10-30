import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 mr-8 ml-8 mt-3">
        <p>Bastien Fournier</p>
        <ul className="flex space-x-20 list-none">
          <li
            onClick={togglePopup}
            className="bg-secondary text-black px-4 py-2 rounded mr-4 hover:bg-yellow-400 hover:shadow-lg transition duration-300"
          >
            Contactez-moi
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg  mb-2">Mes Coordonnées</h2>
            <p>✉️ bastien.fournier06@gmail.com</p>
            <p>☎️ 06 11 43 52 54</p>
            <button
              onClick={togglePopup}
              className="mt-4 bg-secondary text-black  py-2 px-4 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
