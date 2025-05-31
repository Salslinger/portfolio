import { getImageUrl } from "../utils/image-util";
import SkillCard from "./SkillCard";

interface ProjectCardProps {
    title: string;
    date: string;
    description: string
    link: string;
    skills: string[];
}

export default function ProjectCard({
    title,
    date,
    description,
    link,
    skills,
}: ProjectCardProps) {


    return (
        <div 
        className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
        onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
        >
            <img src={getImageUrl(title, "png")} className='w-full h-auto rounded-4xl'/>
            <div className='text-3xl ml-4 my-1'>
                {title}
            </div>
            <div className='text-lg ml-4 my-1'>
                {date}
            </div>
            <div className='text-base mx-4 mb-3'>
                {description}
            </div>
            <div className='flex flex-wrap justify-center'>
                {skills.map(skill => (
                    <SkillCard key={skill} name={skill} isMini={true}/>
                ))}
            </div>
        </div>
    )
}