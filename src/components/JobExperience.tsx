import { getImageUrl } from "../utils/image-util";

interface JobExperienceProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  image?: string; // optional image name
  imageType?: string; // optional image type, e.g., "png" or "jpg"
}

export const JobExperience = ({
  title,
  company,
  date,
  responsibilities,
  image,
  imageType = "png",
}: JobExperienceProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start m-5">
      {image && (
        <img
          src={getImageUrl(image, imageType)}
          className="w-100 lg:mr-8 mb-5 rounded-2xl shadow-lg"
          alt={company}
        />
      )}
      <div className="bg-[#9C9457] rounded-4xl opacity-90 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex-1 lg:h-100">
        <div className="text-3xl m-5 font-bold">{title}</div>
        <div className="text-2xl m-5">{company}</div>
        <div className="text-2xl m-5">{date}</div>
        <div className="text-2xl m-5 space-y-2">
          {responsibilities.map((item, index) => (
            <div key={index}>• {item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
