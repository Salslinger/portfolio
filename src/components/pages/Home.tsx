import SplineScene from "../SplineScene";
import "../Home.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItchIo, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
    <div id="home">
      <div className="absolute inset-0 -z-20 dark-to-light h-255 lg:h-252" />

      {<SplineScene />}

      <div className="flex justify-center h-screen relative">
        <div className="flex flex-col text-center items-center justify-center text-white mx-2">
          <h1 className="text-7xl mb-4 font-bold">Kenny Nguyen</h1>
          <a
            href="mailto:knguyen5574@gmail.com"
            className="mb-2 text-3xl underline hover:text-yellow-200"
          >
            knguyen5574@gmail.com
          </a>
          <div className="flex my-2">
            <a
              href="https://salslinger.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={faItchIo}
                size="2xl"
                className="hover:text-yellow-200 hover:cursor-pointer"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/kenny-nguyen-kai/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                className="hover:text-yellow-200 hover:cursor-pointer"
              ></FontAwesomeIcon>
            </a>
          </div>
          <p className="text-3xl">Software Engineer | Game Developer</p>
        </div>
      </div>
    </div>
  );
};
