// Define the global variables: bottomImg and topImg.
let bottomImg, topImg;

function preload() {
  // Preload the images from the canvas's assets directory.
  // The bottomImg is the photograph with color,
  // and the topImg is the black-and-white photograph.
  bottomImg = loadImage('../img/DGfindmyface1.png');
  topImg = loadImage('../img/DGfindmyface0.png');
}
function setup() {
  describe(
    'Find my face scratch card. The cursor, when dragged across the card, scratches at the squares with a coin to reveal them.'
  );
  
  if (windowWidth < 1126){
    createCanvas(162, 90);
  } else {
    createCanvas(648, 360);
  }

  // Hide the cursor and replace it with a picture of
  // a paintbrush.
  noCursor();
  cursor('../img/DGcoin.png', 0, 0);

  // Load the top image.
  if (windowWidth < 1126){
    topImg.resize(162, 90);
    image(topImg, 0, 0);
  } else {
    topImg.resize(648, 360);
    image(topImg, 0, 0);
  }
}
function mouseDragged() {
  // Using the copy() function, copy the bottom image
  // on top of the top image when you drag your cursor
  // across the canvas.
  if (windowWidth < 1126){
    bottomImg.resize(162, 90);
    copy(bottomImg, mouseX, mouseY, 10, 10, mouseX, mouseY, 10, 10);
  } else {
    bottomImg.resize(648, 360);
    copy(bottomImg, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
  }
}
function windowResized() {
  // Reload the top image.
  if (windowWidth < 1126){
    resizeCanvas(162, 90);
  } else {
    resizeCanvas(648, 360);
  }
  clear();
  if (windowWidth < 1126){
    topImg.resize(162, 90);
    image(topImg, 0, 0);
  } else {
    topImg.resize(648, 360);
    image(topImg, 0, 0);
  }
}