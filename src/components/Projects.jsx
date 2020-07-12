import React from "react";
import PortfolioCard from "./PortfolioCard";


function Projects() {

  return (
    <div class="Projects" id="Projects">
    <div>
    <h1>Projects:</h1>
    <div class="projectsDiv" >
      <PortfolioCard
        title="Pilot Journal"
        description="A full stack blog website with full CRUD capabilities"
        frontStack="HTML CSS SCSS JS"
        backStack="NODE EXPRESS EJS MONGODB MONGOOSE"
        takeMeThere="https://pilot-journal.herokuapp.com/"
        githubDocumentation="https://github.com/LukasSkerlik/blogWebsite"
        img="/static/media/blogv2.b95f5cab.png"
        color="bluePortfolioCard"
      />
      <PortfolioCard
        title="Note app"
        description="A simple, responsive, note-taking react application"
        frontStack="REACTJS"
        backStack=""
        takeMeThere="https://thedefinitivereactnoteapp.herokuapp.com/"
        githubDocumentation="https://github.com/LukasSkerlik/noteApp"
        img="/static/media/noteAppv2.05699087.png"
        color="redPortfolioCard"
      />
    </div>
    </div>
      <div>
        <h3>For other, mostly smaller projects, you can see my github,here: </h3>
        <form action="https://github.com/LukasSkerlik" target="_blank" >
          <input type="submit" value="My github" />
        </form>
      </div>
    </div>
  );
}

export default Projects;
