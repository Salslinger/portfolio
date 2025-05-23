import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faUnity } from '@fortawesome/free-brands-svg-icons';
import godotImage from '../../assets/godot.svg'
import unrealImage from '../../assets/unreal.svg'
import robloxImage from '../../assets/roblox studio.svg'
import flStudioImage from '../../assets/fl studio.svg'
import fmodImage from '../../assets/fmod.svg';
import reaperImage from '../../assets/reaper.svg';
import wwiseImage from '../../assets/wwise.svg';
import blenderImage from '../../assets/blender.svg';
import cppImage from '../../assets/cpp.svg';
import javaImage from '../../assets/java.svg';
import cSharpImage from '../../assets/csharp.svg';
import pythonImage from '../../assets/python.svg';
import htmlImage from '../../assets/html.svg';
import cssImage from '../../assets/css.svg';
import javascriptImage from '../../assets/javascript.svg';
import typescriptImage from '../../assets/typescript.svg';
import rustImage from '../../assets/rust.svg';
import sqlImage from '../../assets/sql.svg';
import reactImage from '../../assets/react.svg';
import nodejsImage from '../../assets/nodejs.svg';
import tailwindImage from '../../assets/tailwind.svg';
import steamworksImage from '../../assets/steamworks.svg';
import jiraImage from '../../assets/jira.svg';
import azureImage from '../../assets/azure_devops.svg';
import visualStudioImage from '../../assets/visual studio.svg';
import vmwareImage from '../../assets/vmware.svg';
import eclipseImage from '../../assets/eclipse.svg'

export const Skills = () => {
  return (
    <div id="skills" className="dark-to-light text-white flex flex-col">
      <h1 className="text-7xl text-center mt-5 mb-5">Skills</h1>
      <div className="flex flex-col text-center items-center justify-center text-white">
        <div className="dark-to-light grid md:grid-cols-1 lg:grid-cols-4 w-screen">

          {/* Software */}
          <div className="bg-[#9C9457] m-5 rounded-4xl opacity-90 shadow-2xl">
            <h1 className="text-4xl m-5">Software</h1>
            <div className="grid grid-cols-2 items-center justify-center space-y-5">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faUnity} size="6x" />
                <span className="text-xl text-white">Unity</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={godotImage} className="w-24 h-24" />
                <span className="text-xl text-white">Godot</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={unrealImage} className="w-24 h-24" />
                <span className="text-xl text-white">Unreal Engine</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={blenderImage} className="w-28 h-28 fill-white" />
                <span className="text-xl text-white -mt-3">Blender</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={fmodImage} className="w-32 h-32" />
                <span className="text-xl text-white">FMOD</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={wwiseImage} className="w-32 h-32 fill-white" />
                <span className="text-xl text-white">Wwise</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={reaperImage} className="w-32 h-32 fill-white" />
                <span className="text-xl text-white">Reaper</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={robloxImage} className="w-24 h-24 m-4" />
                <span className="text-xl text-white">Roblox Studio</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={flStudioImage} className="w-30 h-30" />
                <span className="text-xl text-white mb-5">FL Studio</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[#9C9457] m-5 rounded-4xl opacity-90 shadow-2xl">
            <h1 className="text-4xl m-5">Languages</h1>
            <div className="grid grid-cols-2 items-center justify-center space-y-5">
              <div className="flex flex-col items-center">
                <img src={cppImage} className="w-24 h-24" />
                <span className="text-xl text-white">C/C++</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={javaImage} className="w-24 h-24" />
                <span className="text-xl text-white">Java</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={cSharpImage} className="w-24 h-24" />
                <span className="text-xl text-white">C#</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={pythonImage} className="w-24 h-24 fill-white" />
                <span className="text-xl text-white">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={sqlImage} className="w-24 h-24" />
                <span className="text-xl text-white">SQL</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={htmlImage} className="w-24 h-24 fill-white" />
                <span className="text-xl text-white">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={cssImage} className="w-24 h-24 fill-white" />
                <span className="text-xl text-white">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={javascriptImage} className="w-24 h-24" />
                <span className="text-xl text-white">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={typescriptImage} className="w-24 h-24" />
                <span className="text-xl text-white mb-5">TypeScript</span>
              </div>
              <div className="flex flex-col items-center -mt-10">
                <img src={rustImage} className="w-40 h-40 -mt-5" />
                <span className="text-xl text-white -mt-10">Rust</span>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-[#9C9457] m-5 rounded-4xl opacity-90 shadow-2xl">
            <h1 className="text-4xl m-5">Frameworks</h1>
            <div className="grid grid-cols-2 items-center justify-center space-y-5">
              <div className="flex flex-col items-center">
                <img src={reactImage} className="w-24 h-24 -mt-5" />
                <span className="text-xl text-white">React.js</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={nodejsImage} className="w-20 h-20" />
                <span className="text-xl text-white">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={tailwindImage} className="w-24 h-24" />
                <span className="text-xl text-white">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={steamworksImage} className="w-24 h-24 -mt-5" />
                <span className="text-xl text-white">Steamworks</span>
              </div>
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-[#9C9457] m-5 rounded-4xl opacity-90 shadow-2xl">
            <h1 className="text-4xl m-5">Development Tools</h1>
            <div className="grid grid-cols-2 items-center justify-center space-y-5">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faGithub} size="5x" />
                <span className="text-xl text-white">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={jiraImage} className="w-20 h-20" />
                <span className="text-xl text-white">Jira</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={azureImage} className="w-16 h-16" />
                <span className="text-xl text-white">Azure DevOps</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={visualStudioImage} className="w-16 h-16" />
                <span className="text-xl text-white">Visual Studio</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={vmwareImage} className="w-20 h-20" />
                <span className="text-xl text-white">VMWare</span>
              </div>
              <div className="flex flex-col items-center -mt-5">
                <img src={eclipseImage} className="w-20 h-20" />
                <span className="text-xl text-white">Eclipse</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
