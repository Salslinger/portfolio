
import SplineScene from '../SplineScene';
import "../Home.css"

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { About } from './About';
import { Skills } from './Skills';
import { Experiences } from './Experiences';
import { Projects } from './Projects';

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
      // Wait a tick for DOM to render
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = 40; // Adjust for sticky navbar
          const y = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }

        // Clean up state so it doesn’t scroll again on refresh
        navigate(".", { replace: true, state: null });
      }, 0); // or use requestAnimationFrame
    }
  }, [location, navigate]);

  return (
    <div
      id='home'
      className="min-h-screen"
    >
      <div className='dark-to-light grid md:grid-cols-1 lg:grid-cols-2 h-screen'>
        <div className='flex flex-col text-center items-center justify-center text-white mx-2'>
          <h1 className='text-7xl mb-4 font-bold'>
            Kenny Nguyen
          </h1>
          <a href="mailto:knguyen5574@gmail.com" className='mb-2 text-3xl underline'>knguyen5574@gmail.com</a>
          <p className='text-3xl'>
            Software Engineer | Game Developer | Music Composer
          </p>

        </div>
        <SplineScene scene_url="https://prod.spline.design/MxjMw5J5BNdu-YBZ/scene.splinecode" />
      </div>
        <About></About>
        <Skills></Skills>
        <Experiences></Experiences>

        <Projects></Projects>

      </div>
  )
}
