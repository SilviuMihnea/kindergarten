var BLOCKS_PER_CHART = 5;
var superheroIndex = 0;
var lastSelectedHero;

function generateChart(chartContainer) {
  var container = document.createElement("div");
  var blockDiv, superHeroImg;  // used in the for loop

  container.className = "superHeroesContainer";
  document.getElementById(chartContainer.replace("#", "")).appendChild(container);
  let imgCount = 0;
  for(var i = 1; i <= 3; i++) {
    blockDiv = document.createElement("div");
    blockDiv.className = "div";
    blockDiv.style = " flex-direction: row";
      for(var j=1; j<= 8; j++){
        imgCount= imgCount + 1;
        superHeroImg = document.createElement("img");
        superHeroImg.className = "superHeroImg";
        superHeroImg.id = imgCount;
        superHeroImg.src ="../images/login/"+imgCount+".png";  // see note about browser compatibility
        superHeroImg.style="size: 40%";
        superHeroImg.onclick = (event) => { 
          const parts = event.target.currentSrc.split("/");
          superheroIndex = parts[parts.length - 1];
          if (typeof(lastSelectedHero) !== "undefined"){
          lastSelectedHero.style = "visibility: visible";
          }
          lastSelectedHero = event.target;
          event.target.style = "width: 10%;height: 10%;border-radius: 50%;background-color: rgb(255 235 235);box-shadow: rgb(255 235 235) 0px 0px 30px 20px, rgb(255 160 122) 0px 0px 30px 20px, rgb(255 140 0) 0px 0px 30px 20px;";
        };
        blockDiv.append(superHeroImg);
      }
    container.append(blockDiv);
    if(imgCount == 24){
        blockDiv4 = document.createElement("div");
        blockDiv4.className = "div";
        blockDiv4.style = " flex-direction: row";
        imgCount= imgCount + 1;
        superHeroImg = document.createElement("img");
        superHeroImg.className = "superHeroImg";
        superHeroImg.src ="../images/login/"+imgCount+".png";  // see note about browser compatibility
        superHeroImg.style="size: 40%";
        superHeroImg.onclick = (event) => { 
          const parts = event.target.currentSrc.split("/");
          superheroIndex = parts[parts.length - 1];
          if (typeof(lastSelectedHero) !== "undefined"){
          console.log("intram");
          lastSelectedHero.style = "visibility: visible";
          }
          lastSelectedHero = event.target;
          event.target.style = "width: 10%;height: 10%;border-radius: 50%;background-color: rgb(255 235 235);box-shadow: rgb(255 235 235) 0px 0px 30px 20px, rgb(255 160 122) 0px 0px 30px 20px, rgb(255 140 0) 0px 0px 30px 20px;";
        };
        blockDiv4.append(superHeroImg);
        container.append(blockDiv4);
    }
    
  }
}

function onClickLogin() {
  const text = document.getElementById('fname').value;
  login(text, superheroIndex);
  start();
  redirectToGame('job-object-association-game');
}