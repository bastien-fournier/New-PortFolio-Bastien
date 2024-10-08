import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 ml-8">
        <p>Bastien Fournier</p>
        <ul className="flex space-x-20 list-none">
          {/* <li>A propos</li>
          <li>Projets</li> */}
          <li
            onClick={togglePopup}
            className="cursor-pointer transition duration-300 ease-in-out hover:bg-yellow-400 hover:text-black px-2 py-1 rounded"
          >
            Contact
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Mes Coordonnées</h2>
            <p>✉️ bastien.fournier06@gmail.com</p>
            <p>☎️ 06 11 43 52 54</p>
            <button
              onClick={togglePopup}
              className="mt-4 bg-secondary text-black font-bold py-2 px-4 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
