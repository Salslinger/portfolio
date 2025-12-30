import { JobExperience } from "../JobExperience";

export const Experiences = () => {
  return (
    <div id="experience" className="light-to-dark text-white flex flex-col">
      <h1 className="text-7xl font-bold text-center mt-10 mb-5">Experience</h1>

      <JobExperience
        title="Product Developer and Funded Researcher"
        company="The University of Texas at Arlington - Department of Computer Science and Engineering"
        date="September 2024 - May 2025"
        responsibilities={[
          "Managed a team of 6 to develop Maventure VR, a virtual reality game used as a recruitment tool",
          "Wrote 6 professional design documents for organization that facilitated the development of this game",
          "Researched benefits of virtual reality on energy sustainability and created an alternative recruiting tool for UTA",
          "Coordinated and managed multiple testing sessions for software quality assurance leading to improved software stability",
          "Adopted legacy code to reduce networking implementation by 50%",
        ]}
        image="rhythmix"
        imageType="png"
      />

      <JobExperience
        title="Founder and President"
        company="Video Game Developers Organization at UTA"
        date="September 2023 - May 2025"
        responsibilities={[
          "Coordinated a team of 7 officers to boost community engagement within the organization by over 300%",
          "Mentored 300+ members about game development processes, various game engines, and programming principles",
          "Taught 300+ members about how to use several game development software such as Unity, Godot, and FMOD",
          "Streamlined member communication by developing a landing page website with HTML5, CSS, and JavaScript",
        ]}
        image="rhythmix"
        imageType="png"
      />

      <JobExperience
        title="Systems Developer and Music Composer"
        company="Nihilo Games"
        date="April 2023 - December 2024"
        responsibilities={[
          "Constructed dialogue and dynamic audio systems that were used for 4 different video games with Godot",
          "Implemented dynamic audio systems by utilizing the FMOD API and developing a Sound Bank system",
          "Facilitated development workflow, task delegation, and project management by utilizing GitHub and Jira",
          "Enhanced UI systems and front-end development with responsive layouts, improving device accessibility",
        ]}
        image="rhythmix"
        imageType="png"
      />

      <JobExperience
        title="Student Assistant"
        company="The University of Texas at Arlington - Department of Civil Engineering"
        date="October 2022 - September 2023"
        responsibilities={[
          "Created a friendly and inviting work environment with dedication to providing quality customer service",
          "Coordinated with managers and other student assistants to reduce daily workload by 50%",
        ]}
        image="rhythmix"
        imageType="png"
      />
    </div>
  );
};
