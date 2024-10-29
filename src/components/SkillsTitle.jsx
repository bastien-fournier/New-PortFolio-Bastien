import GroupePicture from "../assets/groupe-picture.jpg";

export default function SkillsTitle() {
  return (
    <div>
      <div className="ml-0 lg:ml-40">
        <figure className="flex flex-col items-center">
          <img
            className="w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover shadow-lg rounded-lg"
            src={GroupePicture}
            alt="Groupe"
          />
          <figcaption className="text-center mt-2 text-sm text-gray-600">
            Hackathon à la Wild Code School
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
