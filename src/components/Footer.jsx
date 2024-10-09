import Mail from "../assets/mail.svg";
import Linkedin from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary relative pt-8 pb-4 text-center">
        <div className="relative z-10 flex justify-center space-x-8">
          <a href="mailto:bastien.fournier06@gmail.com" target="blank">
            <img className="h-8" src={Mail} alt="Lien vers mon mail" />
          </a>
          <a
            href="https://www.linkedin.com/in/bastien-fournier-395643179/"
            target="blank"
          >
            <img
              src={Linkedin}
              className="h-8"
              alt="Lien vers mon profil Linkedin"
            />
          </a>
          <a href="https://github.com/bastien-fournier" target="blank">
            <img
              src={GitHub}
              alt="Lien vers mon compte GitHub"
              className="h-8"
            />
          </a>
        </div>
        <div>
          <p>Made with ❤️ © 2024 Bastien Fournier</p>
        </div>
      </footer>
    </>
  );
}
