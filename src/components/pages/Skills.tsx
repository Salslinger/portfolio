import cppImage from "../../assets/cpp.svg";
import cSharpImage from "../../assets/csharp.svg";
import SkillCard from "../SkillCard";

export const Skills = () => {
  return (
    <div id="skills" className="dark-to-light text-white flex flex-col">
      <h1 className="text-7xl font-bold text-center mt-5 mb-5">Skills</h1>
      <div className="flex flex-col text-center items-center justify-center text-white">
        <div className="dark-to-light grid md:grid-cols-1 lg:grid-cols-4 w-screen">
          {/* Languages */}
          <div className="bg-[#9C9457] m-5 rounded-4xl opacity-90 shadow-2xl">
            <h1 className="text-4xl m-5">Languages</h1>
            <div className="grid grid-cols-2 items-center justify-center space-y-5">
              <div className="flex flex-col items-center">
                <img src={cppImage} className="w-12 h-12" />
                <span className="text-xl text-white">C/C++</span>
              </div>
              <SkillCard
                name="Java"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <div className="flex flex-col items-center">
                <img src={cSharpImage} className="w-12 h-12" />
                <span className="text-xl text-white">C#</span>
              </div>
              <SkillCard
                name="Python"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="SQL"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="HTML"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="CSS"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="JavaScript"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="TypeScript"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
            </div>
          </div>

          {/* Software */}
          <div className="bg-[#9C9457] m-5 rounded-4xl opacity-90 shadow-2xl pb-10">
            <h1 className="text-4xl m-5">Software</h1>
            <div className="grid grid-cols-2 items-center justify-center space-y-5">
              <SkillCard
                name="Unity"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="Godot"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="Unreal Engine"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="Blender"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="FMOD"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="WWise"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="Reaper"
                isMini={false}
                width={140}
                height={100}
              ></SkillCard>
              <SkillCard
                name="Roblox Studio"
                isMini={false}
                width={80}
                height={100}
              ></SkillCard>
              <SkillCard
                name="FL Studio"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-[#9C9457] m-5 rounded-4xl opacity-90 shadow-2xl">
            <h1 className="text-4xl m-5">Frameworks</h1>
            <div className="grid grid-cols-2 items-center justify-center space-y-5">
              <SkillCard
                name="React"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="NodeJS"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="Tailwind CSS"
                isMini={false}
                width={100}
                height={100}
              ></SkillCard>
              <SkillCard
                name="Steamworks"
                isMini={false}
                width={80}
                height={80}
              ></SkillCard>
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-[#9C9457] m-5 rounded-4xl opacity-90 shadow-2xl">
            <h1 className="text-4xl m-5">Development Tools</h1>
            <div className="grid grid-cols-2 items-center justify-center space-y-5">
              <SkillCard
                name="GitHub"
                isMini={false}
                width={80}
                height={80}
              ></SkillCard>
              <SkillCard
                name="Jira"
                isMini={false}
                width={80}
                height={80}
              ></SkillCard>
              <SkillCard
                name="Azure DevOps"
                isMini={false}
                width={60}
                height={60}
              ></SkillCard>
              <SkillCard
                name="Visual Studio"
                isMini={false}
                width={60}
                height={60}
              ></SkillCard>
              <SkillCard
                name="VMWare"
                isMini={false}
                width={80}
                height={80}
              ></SkillCard>
              <SkillCard
                name="Eclipse"
                isMini={false}
                width={80}
                height={70}
              ></SkillCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
