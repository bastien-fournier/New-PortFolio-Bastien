export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <p>Bastien Fournier</p>
        <ul className="flex space-x-20 list-none">
          <li>A propos</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
