import React from "react";


function Projects() {

  return (
    <div id="Projects">
    <h1>Projects</h1>
    <div class="projectsDiv" >
      <div>
        <h1>Blog Website</h1>
        <h3>A fully responsive full stack website with full CRUD capabilities</h3>
        <p>Html css scss js</p>
        <p>node express ejs mongodb mongoose</p>
          <div class="buttonDiv">
            <form action="https://pilot-journal.herokuapp.com/" target="_blank" >
              <input type="submit" value="Take me there!" />
            </form>
            <form action="https://github.com/LukasSkerlik/blogWebsite" target="_blank" >
              <input type="submit" value="Github documention" />
            </form>
          </div>
      </div>

      <div>
        <h1>Note app</h1>
        <h3>A fully responsive note-taking react app</h3>
        <p>React</p>
          <div class="buttonDiv">
            <form action="https://thedefinitivereactnoteapp.herokuapp.com/" target="_blank" >
              <input type="submit" value="Take me there!" />
            </form>
            <form action="https://github.com/LukasSkerlik/noteApp" target="_blank" >
              <input type="submit" value="Github documention" />
            </form>
          </div>
      </div>
      </div>
      <h3>For other, smaller projects, you can see my github,here: </h3>
      <form action="https://github.com/LukasSkerlik" target="_blank" >
        <input type="submit" value="My github" />
      </form>
    </div>
  );
}

export default Projects;
