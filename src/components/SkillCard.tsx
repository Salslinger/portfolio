import { getImageUrl } from "../utils/image-util";

interface SkillCardProps {
    name: string;
    isMini: boolean;
    width?: number;
    height?: number;
}

export default function SkillCard({
    name,
    isMini,
    width = isMini ? 24 : 6,
    height = isMini ? 24 : 6
}: SkillCardProps) {
    
    if (isMini) {
        return (
            <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-2 items-center'>
                <img src={getImageUrl(name, "svg")} className="mx-1" style={{width, height}} />
                <span className='text-base text-white mr-2'>{name}</span>
            </div>
        )
    }

    else {
        return (
            <div className="flex flex-col items-center">
                <img src={getImageUrl(name, "svg")} style={{width, height}} />
                <span className="text-xl text-white">{name}</span>
            </div>
        )
    }
}