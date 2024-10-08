import ProfilPic from "../assets/profile-pic.png";

export default function ProfilPicture() {
  return (
    <div className="relative">
      <img
        className="w-full h-full object-cover"
        src={ProfilPic}
        alt="Photo de profil Bastien"
      />
    </div>
  );
}
