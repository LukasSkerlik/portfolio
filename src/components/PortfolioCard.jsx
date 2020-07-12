import React from "react";
import blogv2 from './images/blogv2.png'; // Tell webpack this JS file uses this image
import noteAppv2 from './images/noteAppv2.png'; // Tell webpack this JS file uses this image

function PortfolioCard(props) {
console.log(noteAppv2);
// /static/media/noteAppv2.05699087.png
console.log(blogv2);
// /static/media/blogv2.b95f5cab.png
let colorText= props.color + "Text";
  return (
    <div>
          <h1 class="underline" id={colorText}>{props.title}</h1>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="PortfolioCardImg" src={props.img} alt="Lukas-Skerlik" />
    </div>
    <div class={props.color}>
      <h3>{props.description}</h3>
      <p class="underline">Stack:</p>
      <p>{props.frontStack}</p>
      <p>{props.backStack} </p>
      <div class="buttonDiv">
        <form action={props.takeMeThere} target="_blank" >
          <input type="submit" value="Take me there!" />
        </form>
        <form action={props.githubDocumentation} target="_blank" >
          <input type="submit" value="Github documention" />
        </form>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default PortfolioCard;
