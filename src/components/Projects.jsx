import React from "react";
import PortfolioCard from "./PortfolioCard";


function Projects() {

  return (
    <div id="Projects">
    <h1>Projects</h1>
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
      description="A note-taking react app"
      frontStack="REACTJS"
      backStack=""
      takeMeThere="https://thedefinitivereactnoteapp.herokuapp.com/"
      githubDocumentation="https://github.com/LukasSkerlik/noteApp"
      img="/static/media/noteAppv2.05699087.png"
      color="redPortfolioCard"
    />



      </div>
      <h3>For other, smaller projects, you can see my github,here: </h3>
      add weather app, tindog etc...
      <form action="https://github.com/LukasSkerlik" target="_blank" >
        <input type="submit" value="My github" />
      </form>
    </div>
  );
}

export default Projects;
