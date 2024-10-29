import GroupePicture from "../assets/groupe-picture.jpg";

export default function SkillsTitle() {
  return (
    <div>
      <div className="ml-0 lg:ml-40">
        <figure className="flex flex-col items-center">
          <img
            className="max-w-full max-h-full sm:max-w-full sm:max-h-full md:max-w-full md:max-h-full lg:max-w-full lg:max-h-full object-cover shadow-lg rounded-lg"
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
