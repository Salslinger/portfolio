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
import scumbag from '../../assets/s7mIhC.png'
import myPortfolio from '../../assets/dsaw.png';

export const Projects = () => {
  return (
        <div id='projects' className='dark-to-light text-white flex flex-col'>
          <h1 className='text-7xl text-center mt-10 mb-5'>
            Projects
          </h1>
          <div className='grid md:grid-cols-1 lg:grid-cols-3 lg:mx-52'>
            <div className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer">
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                My Portfolio
              </div>
              <div className='text-lg ml-4 my-1'>
                May 2025 - Present
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>React</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={htmlImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>HTML</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={cssImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>CSS</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={tailwindImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Tailwind CSS</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={javascriptImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>JavaScript</span>
                </div> 
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Maventure VR
              </div>
              <div className='text-lg ml-4 my-1'>
                September 2024 - May 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={scumbag} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Scumbag Streamer
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Snatched
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Well Done
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Network Distance Vector Routing
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                I'm being jumped by Squares
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>            
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Maestra - Music Sightreading
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Lunacy
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Student Advising Appointment System
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                MOBI 3D
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Egos 2000 Operating System
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Statefarm Interactive Hazard Game
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Referees of Eternal Free for All
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Past the Sleeping Mice
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Rhythmix
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Travel Cost Estimator
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Casino Slots - Code.Org
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2025 - March 2025
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={godotImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Godot</span>
                </div>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faGithub} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Git</span>
                </div>    
              </div>
            </div>
          </div>
        </div>
  )
}
