import About from "../components/About";
import ProfilPicture from "../components/ProfilPicture";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center p-8">
        <About />
        <ProfilPicture />
      </div>
    </>
  );
}
