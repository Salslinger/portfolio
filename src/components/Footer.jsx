import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full mt-auto items-center">
      <img
        src="/website/footer_div_wave.svg"
        className="w-full block m-0 p-0"
      ></img>
      <div className="bg-secondary/90 pb-5">
        <div className="flex flex-col items-center text-tertiary">
          <ul className="flex">
            <li className=" mx-5">
              <a
                href="https://github.com/uta-vgdo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2xl"
                  className="hover:text-primary"
                ></FontAwesomeIcon>
              </a>
            </li>
          </ul>
          <p className="text-center mt-2">
            <a href="mailto:vgdo.uta@gmail.com" className="hover:text-primary">
              knguyen5574@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
