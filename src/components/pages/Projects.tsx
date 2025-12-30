import ProjectCard from "../ProjectCard";

export const Projects = () => {
  return (
    <div id="projects" className="dark-to-light text-white flex flex-col">
      <h1 className="text-7xl font-bold text-center mt-10 mb-5">Projects</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 lg:mx-52">
        <ProjectCard
          title="Out of the Box"
          date="May 2025"
          description="Submission for the GameDev.Tv 2025 Game Jam (Theme: Tiny World). Top 3% in Music and 4% in Story categories out of 1023 entries."
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["Godot", "GitHub", "FL Studio"]}
        ></ProjectCard>
        <ProjectCard
          title="My Portfolio"
          date="May 2025 - Present"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={[
            "React",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "GitHub",
          ]}
        ></ProjectCard>
        <ProjectCard
          title="Maventure VR"
          date="September 2024 - May 2025"
          description="Virtual reality multiplayer game used as a campus recruiting tool. This was my senior design project that was sponsored by the College of Engineering Assistant Dean."
          link="https://websites.uta.edu/cseseniordesign/2025/05/02/maventure-vr/"
          skills={["Unity", "Blender", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Scumbag Streamer"
          date="February 2025 - March 2025"
          description="Submission for the VGDO Spring 2025 Game Jam (Theme: All Eyes on Me). First place in Narrative and Visuals categories and 2nd place overall."
          link="https://salslinger.itch.io/streamer"
          skills={["Godot", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Snatched"
          date="November 2024 - December 2024"
          description="CSE 4304 Game Design Final Project. Horror story game. Top 3 out of 7 games."
          link="https://salslinger.itch.io/streamer"
          skills={["Unity", "FL Studio", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Well Done"
          date="November 2024"
          description="Submission for the VGDO Fall 2024 Game Jam (Theme: Burnout). First place in Audio and Narrative categories and 2nd place overall."
          link="https://salslinger.itch.io/streamer"
          skills={["Godot", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Network Distance Vector Table"
          date="October 2024 - November 2024"
          description="CSE 4344 Computer Network Organization Project. Table GUI to display distances between network routers."
          link="https://salslinger.itch.io/streamer"
          skills={["Python"]}
        ></ProjectCard>
        <ProjectCard
          title="I'm being jumped by Squares"
          date="October 2024"
          description="CSE 4304 Game Design Intermediate Project. Wave-based shooter game."
          link="https://salslinger.itch.io/streamer"
          skills={["Unity", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Maestra - Music Sightreading"
          date="September 2024"
          description="CSE 4304 Educational Game. Learn how to sight read sheet music in a fun game!"
          link="https://salslinger.itch.io/streamer"
          skills={["Unity", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Lunacy"
          date="August 2024"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/streamer"
          skills={["Godot", "GitHub", "FL Studio"]}
        ></ProjectCard>
        <ProjectCard
          title="Student Advising Appointment System"
          date="February 2024 - May 2024"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={[
            "React",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "GitHub",
          ]}
        ></ProjectCard>
        <ProjectCard
          title="MOBI 3D"
          date="September 2023 - December 2023"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["Godot", "GitHub", "Steamworks"]}
        ></ProjectCard>
        <ProjectCard
          title="Egos 2000 Operating System"
          date="September 2023 - November 2023"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["C", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Library Database"
          date="September 2023 - November 2023"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["Python", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="StateFarm Interactive Hazard Game"
          date="October 2023"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["Godot", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Referees of Eternal Free for All"
          date="July 2023"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["FL Studio", "Godot", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Past the Sleeping Mice"
          date="May 2023 - June 2023"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["FL Studio", "Godot", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Rhythmix"
          date="February 2023 - July 2023"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["Unity", "GitHub"]}
        ></ProjectCard>
        <ProjectCard
          title="Travel Cost Estimator"
          date="March 2022 - May 2022"
          description="You are looking at it right now! Hope you enjoy!"
          link="https://salslinger.itch.io/out-of-the-box"
          skills={["Java"]}
        ></ProjectCard>
        <ProjectCard
          title="Casino Slots - Code.org"
          date="March 2020 - May 2020"
          description="This is one of my first ever coding projects made for AP Computer Science Principles, and is what initially got me interested in Computer Science."
          link="https://studio.code.org/projects/applab/R9ZWClgl1dwMkeXDGjxAUSgdR_vc-L41ifmnVxj-afo"
          skills={[]}
        ></ProjectCard>
      </div>
    </div>
  );
};
