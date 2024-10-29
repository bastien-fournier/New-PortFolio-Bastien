import ProfilPic from "../assets/profile-pic.png";

export default function ProfilPicture() {
  return (
    <div className="ml-0 lg:ml-40">
      <img
        className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[400px] object-cover  rounded-lg"
        src={ProfilPic}
        alt="Photo de profil Bastien"
      />
    </div>
  );
}
