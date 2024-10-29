import About from "../components/About";
import ContactForm from "../components/ContactForm";
import MyProjects from "../components/MyProjects";
import ProfilPicture from "../components/ProfilPicture";
import ProjectTitle from "../components/ProjectTitle";
import Skills from "../components/Skills";
import SkillsTitle from "../components/SkillsTitle";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-12 lg:p-16 xl:p-20 gap-8 md:gap-16 mt-10 ">
        <About />
        <ProfilPicture />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-80">
        <SkillsTitle />
        <Skills />
      </div>

      <div className="flex flex-col items-center justify-center mt-10 md:mt-14 lg:mt-10 gap-8 md:gap-10">
        <ProjectTitle />
        <div className="w-full md:w-auto p-8">
          <MyProjects />
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </>
  );
}
