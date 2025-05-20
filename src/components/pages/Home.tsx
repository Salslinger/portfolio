
import SplineScene from '../SplineScene';
import "../Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faUnity } from '@fortawesome/free-brands-svg-icons';
import godotImage from '../../assets/godot.svg'
import unrealImage from '../../assets/unreal.svg'
import robloxImage from '../../assets/roblox studio.svg'
import flStudioImage from '../../assets/fl studio.svg'
import fmodImage from '../../assets/fmod.svg';
import reaperImage from '../../assets/reaper.svg';
import wwiseImage from '../../assets/wwise.svg';


export const Home = () => {
  return (
    <div
      className="min-h-screen"
    >
      <div className='dark-to-light grid md:grid-cols-1 lg:grid-cols-2 h-screen'>
        <div className='flex flex-col text-center items-center justify-center text-white'>
          <h1 className='text-7xl mb-6'>
            Kenny Nguyen
          </h1>
          <p className='text-3xl'>
            Software Engineer | Game Developer | Music Composer
          </p>

        </div>
        <SplineScene scene_url='https://prod.spline.design/c0nEeamsGRd7qoLR/scene.splinecode' />
      </div>
      <div className='light-to-dark text-white flex flex-col h-[50vh]'>
        <h1 className='text-7xl text-center mt-5 mb-5'>
          About Me
        </h1>
        <p className='pl-20 pr-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo eaque rem fugiat? Temporibus, cum, quae, delectus alias dolores expedita quas ad accusamus minus debitis vitae sunt totam culpa velit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo eaque rem fugiat? Temporibus, cum, quae, delectus alias dolores expedita quas ad accusamus minus debitis vitae sunt totam culpa velit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo eaque rem fugiat? Temporibus, cum, quae, delectus alias dolores expedita quas ad accusamus minus debitis vitae sunt totam culpa velit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo eaque rem fugiat? Temporibus, cum, quae, delectus alias dolores expedita quas ad accusamus minus debitis vitae sunt totam culpa velit.
        </p>
      </div>
      <div className='dark-to-light text-white flex flex-col h-[50vh]'>
        <h1 className='text-7xl text-center mt-5 mb-5'>
          Skills
        </h1>
        <div className='flex flex-col text-center items-center justify-center text-white'>
          <div className='dark-to-light grid md:grid-cols-1 lg:grid-cols-3 w-screen h-screen'>
            <div className='bg-[#9C9457] m-25 rounded-4xl opacity-90'>
              <h1 className='text-5xl mt-5 mb-5'>
                Software
              </h1>
              <div className='grid grid-cols-2 items-center justify-center space-y-5'>
                <div className='flex flex-col items-center'>
                  <FontAwesomeIcon icon={faUnity} size='6x'/>
                  <span className='text-xl text-white'>Unity</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={godotImage} className='w-24 h-24'/>
                  <span className='text-xl text-white'>Godot</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={unrealImage} className='w-24 h-24'/>
                  <span className='text-xl text-white'>Unreal Engine</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={robloxImage} className='w-20 h-20'/>
                  <span className='text-xl text-white'>Roblox Studio</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={flStudioImage} className='w-30 h-30'/>
                  <span className='text-xl text-white'>FL Studio</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={fmodImage} className='w-32 h-32'/>
                  <span className='text-xl text-white'>FMOD</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={reaperImage} className='w-32 h-32 fill-white'/>
                  <span className='text-xl text-white'>Reaper</span>
                </div> 
                <div className='flex flex-col items-center'>
                  <img src={wwiseImage} className='w-32 h-32 fill-white'/>
                  <span className='text-xl text-white'>Wwise</span>
                </div>      
              </div>
            </div>
            <div className='bg-[#9C9457] m-25 rounded-4xl opacity-90'>
              <h1 className='text-5xl mt-5'>
                Languages
              </h1>
            </div>
            <div className='bg-[#9C9457] m-25 rounded-4xl opacity-90'>
              <h1 className='text-5xl mt-5'>
                Development Tools
              </h1>
            </div>
          </div>
        </div>

        <div className='light-to-dark text-white flex flex-col h-[50vh]'>
          <h1 className='text-7xl text-center mt-5 mb-5'>
            Experience
          </h1>
        </div>

      </div>
    </div>

  )
}
