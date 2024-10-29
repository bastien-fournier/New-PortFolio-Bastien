import GroupePicture from "../assets/groupe-picture.jpg";

export default function SkillsTitle() {
  return (
    <div className="ml-0 lg:ml-16 xl:ml-32">
      <figure className="flex flex-col items-center">
        <img
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[400px] object-cover shadow-lg rounded-lg"
          src={GroupePicture}
          alt="Groupe"
        />
        <figcaption className="text-center mt-2 text-sm text-gray-600">
          Hackathon à la Wild Code School
        </figcaption>
      </figure>
    </div>
  );
}
