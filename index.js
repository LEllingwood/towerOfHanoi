
const xLargeDisc = document.getElementById("xLargeDisc");
const largeDisc = document.getElementById("largeDisc");
const mediumDisc = document.getElementById("mediumDisc");
const smallDisc = document.getElementById("smallDisc");

const towerOne = document.getElementById("startTower");
const towerTwo = document.getElementById("offsetTower");
const towerThree = document.getElementById("endTower");


const towers = [towerOne, towerTwo, towerThree];

towers.forEach(function (tower)

  {
    tower.addEventListener("click", pickUpDisc);

  })
let discInHand = null

function pickUpDisc(event) {
  const tower = event.currentTarget
  if (tower.childElementCount > 0) {
    discInHand = tower.lastElementChild;
    tower.removeChild(discInHand)
    for (let i = 0; i < towers.length; i++) {
      towers[i].removeEventListener("click", pickUpDisc);
      towers[i].addEventListener("click", dropDisc);
    }
  }
}

function dropDisc(event) {
  const tower = event.currentTarget
  let sizeOfTopDisc = 5;
  if (tower.childElementCount > 0) {
    sizeOfTopDisc = parseInt(tower.lastElementChild.dataset.size)
  }
  if (discInHand.dataset.size < sizeOfTopDisc) {
  
  tower.appendChild(discInHand);
  discInHand = null;
  for (let i = 0; i < towers.length; i++) {
    towers[i].removeEventListener("click", dropDisc);
    towers[i].addEventListener("click", pickUpDisc);
  }
}
if (towerTwo.childElementCount === 4 || towerThree.childElementCount === 4) {
  function displayOnPage() {
    const message = document.createTextNode("You Win!");
    const newP = document.createElement("p");
    const destination = document.getElementById("whatever");
    newP.appendChild(message);
    destination.appendChild(newP);
  }
displayOnPage()
}

const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", startOver);

function startOver() {
  console.log("message");
  location.reload()
}
}
