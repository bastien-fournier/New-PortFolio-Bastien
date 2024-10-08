import Html from "../assets/html.svg";

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-5 flex ">
      <div className="flex-1 pr-4">
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js, Express</li>
          <li>SQL</li>
          <li>Git, Agile Scrum</li>
        </ul>
      </div>
      <div className="w-1/2 pl-4 flex flex-wrap">
        <img src={Html} alt="Logo Html" className="w-16 h-16 m-2" />
        <img src={Html} alt="Logo Html" className="w-16 h-16 m-2" />
        <img src={Html} alt="Logo Html" className="w-16 h-16 m-2" />
        <img src={Html} alt="Logo Html" className="w-16 h-16 m-2" />
        <img src={Html} alt="Logo Html" className="w-16 h-16 m-2" />
        <img src={Html} alt="Logo Html" className="w-16 h-16 m-2" />
      </div>
    </div>
  );
}
