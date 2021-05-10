var BLOCKS_PER_CHART = 5;
var superheroIndex = 0;

function generateChart(chartContainer) {
  var container = document.createElement("div");
  var text = "Hello World!";
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
        superHeroImg.src ="../images/login/"+imgCount+".png";  // see note about browser compatibility
        superHeroImg.style="size: 40%";
        superHeroImg.onclick = (event) => { 
          const parts = event.target.currentSrc.split("/");
          superheroIndex = parts[parts.length - 1];
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