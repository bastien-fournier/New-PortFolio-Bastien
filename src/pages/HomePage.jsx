import About from "../components/About";
import MyProjects from "../components/MyProjects";
import ProfilPicture from "../components/ProfilPicture";
import ProjectTitle from "../components/ProjectTitle";
import Skills from "../components/Skills";
import SkillsTitle from "../components/SkillsTitle";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center p-8 mt-14">
        <About />
        <ProfilPicture />
      </div>
      <div className="flex flex-col content-center items-center justify-center mt-20 gap-10">
        <ProjectTitle />
        <MyProjects />
      </div>
      <div className="flex flex-col content-center items-center justify-center mt-20 gap-10 mb-20">
        <SkillsTitle />
        <Skills />
      </div>
    </>
  );
}
