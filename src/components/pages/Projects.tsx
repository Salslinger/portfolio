import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faUnity } from '@fortawesome/free-brands-svg-icons';
import godotImage from '../../assets/godot.svg'
import cppImage from '../../assets/cpp.svg';
import javaImage from '../../assets/java.svg';
import pythonImage from '../../assets/python.svg';
import htmlImage from '../../assets/html.svg';
import cssImage from '../../assets/css.svg';
import javascriptImage from '../../assets/javascript.svg';
import tailwindImage from '../../assets/tailwind-css.svg';
import steamworksImage from '../../assets/steamworks.svg';
import scumbag from '../../assets/s7mIhC.png'
import myPortfolio from '../../assets/my-portfolio.png';
import sntached from '../../assets/snatched.png'
import wellDone from '../../assets/well done.png'
import lunacy from '../../assets/lunacy.png'
import ProjectCard from '../ProjectCard';

export const Projects = () => {
  return (
        <div id='projects' className='dark-to-light text-white flex flex-col'>
          <h1 className='text-7xl text-center mt-10 mb-5'>
            Projects
          </h1>
          <div className='grid md:grid-cols-1 lg:grid-cols-3 lg:mx-52'>
            <ProjectCard
            title='Out of the Box'
            date='May 2025'
            description='Submission for the GameDev.Tv 2025 Game Jam.'
            link='https://salslinger.itch.io/out-of-the-box'
            skills={['Godot', 'GitHub', 'FL Studio']}
            >
            </ProjectCard>
            <ProjectCard
            title='My Portfolio'
            date='May 2025 - Present'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://salslinger.itch.io/out-of-the-box'
            skills={['React', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'GitHub']}
            >
            </ProjectCard>
            <ProjectCard
            title='Mavenuture VR'
            date='September 2024 - May 2025'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://websites.uta.edu/cseseniordesign/2025/05/02/maventure-vr/'
            skills={['Unity', 'Blender', 'GitHub']}
            >
            </ProjectCard>
            <ProjectCard
            title='Scumbag Streamer'
            date='February 2025 - March 2025'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://salslinger.itch.io/streamer'
            skills={['Godot', 'GitHub']}
            >
            </ProjectCard>
            <ProjectCard
            title='Snatched'
            date='November 2024 - December 2024'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://salslinger.itch.io/streamer'
            skills={['Unity', 'FL Studio', 'GitHub']}
            >
            </ProjectCard>
            <ProjectCard
            title='Well Done'
            date='November 2024'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://salslinger.itch.io/streamer'
            skills={['Godot', 'GitHub']}
            >
            </ProjectCard>
            <ProjectCard
            title='Network Distance Vector Table'
            date='October 2024 - November 2024'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://salslinger.itch.io/streamer'
            skills={['Python']}
            >
            </ProjectCard>
            <ProjectCard
            title="I'm being jumped by Squares"
            date='October 2024'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://salslinger.itch.io/streamer'
            skills={['Unity', 'GitHub']}
            >
            </ProjectCard>          
            <ProjectCard
            title="Maestra - Music Sightreading"
            date='September 2024'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://salslinger.itch.io/streamer'
            skills={['Unity', 'GitHub']}
            >
            </ProjectCard>     
            <ProjectCard
            title="Lunacy"
            date='August 2024'
            description='You are looking at it right now! Hope you enjoy!'
            link='https://salslinger.itch.io/streamer'
            skills={['Godot', 'GitHub', 'FL Studio']}
            >
            </ProjectCard>     
            <div
              className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 duration-500 hover:shadow-yellow-500 hover:cursor-pointer"
              onClick={() => window.open('https://salslinger.itch.io/streamer', '_blank', 'noopener,noreferrer')}
            >
              <img src={myPortfolio} className='w-full h-auto rounded-4xl'/>
              <div className='text-3xl ml-4 my-1'>
                Student Advising Appointment System
              </div>
              <div className='text-lg ml-4 my-1'>
                February 2024 - May 2024
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faReact} size='1x' className='m-1 ml-2'/>
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
                MOBI 3D
              </div>
              <div className='text-lg ml-4 my-1'>
                September 2023 - December 2023
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
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={steamworksImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Steamworks</span>
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
                September 2023 - November 2023
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={cppImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>C</span>
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
                Library Database
              </div>
              <div className='text-lg ml-4 my-1'>
                September 2023 - November 2023
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={pythonImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Python</span>
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
                October 2023
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
                July 2023
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
                May 2023 - June 2023
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
                February 2023 - March 2023
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <FontAwesomeIcon icon={faUnity} size='1x' className='m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Unity</span>
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
                March 2022 - May 2022
              </div>
              <div className='text-base mx-4 mb-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non, odio error corrupti, quos totam facilis temporibus natus sequi eaque porro nemo sit doloremque, tempora cupiditate ea. Sit, assumenda voluptates.
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='text-lg mx-4 mb-3 justify-center flex bg-[#1a1717] rounded-4xl py-0.5 items-center'>
                  <img src={javaImage} className='w-6 h-6 m-1 ml-2'/>
                  <span className='text-base text-white mr-3'>Java</span>
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
                March 2020 - May 2020
              </div>
              <div className='text-base mx-4 mb-3'>
                This is one of my first ever coding projects made for AP Compuer Science Principles and is what got me into Computer Science.
              </div>
            </div>
          </div>
        </div>
  )
}
