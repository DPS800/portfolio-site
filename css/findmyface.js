// Define the global variables: bottomImg and topImg.
let bottomImg, topImg;

function preload() {
  // Preload the images from the canvas's assets directory.
  // The bottomImg is the photograph with color,
  // and the topImg is the black-and-white photograph.
  
  const myDiv = document.querySelector('[data-page]');
  switch (myDiv.dataset.page) {

    case ('1') : [bottomImg = loadImage('../img/DGfindmyface1.png')] ;
    case ('1') : [topImg = loadImage('../img/DGfindmyface0.png')] ; break;

    case ('2') : [bottomImg = loadImage('../img/DGfindmyface3.png')] ;
    case ('2') : [topImg = loadImage('../img/DGfindmyface2.png')] ; break;

  }
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
  // a coin.
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

// var sOne = function( p ) { // p could be any variable name
//   setup = function() {
//     p.describe(
//       'First find my face scratch card. The cursor, when dragged across the card, scratches at the squares with a coin to reveal them.'
//     );
//     if (p.windowWidth < 1126){
//       p.createCanvas(162, 90);
//       p.image(topImg, 0, 0);
//     } else {
//       p.createCanvas(648, 360);
//       p.image(topImg, 0, 0);
//     }

//     if (p.windowWidth < 1126){
//       p.resizeCanvas(162, 90);
//     } else {
//       p.resizeCanvas(648, 360);
//     }
//     p.clear();
//     if (p.windowWidth < 1126){
//       topImg.resize(162, 90);
//       p.image(topImg, 0, 0);
//     } else {
//       topImg.resize(648, 360);
//       p.image(topImg, 0, 0);
//     }
//   };

//   draw = function() {
//     // Hide the cursor and replace it with a picture of a coin.
//     p.noCursor();
//     p.cursor('../img/DGcoin.png', 0, 0);
    
//     // Using the copy() function, copy the bottom image
//     // on top of the top image when you drag your cursor
//     // across the canvas.
//     mouseDragged = function() {
//       if (p.windowWidth < 1126){
//         bottomImg.resize(162, 90);
//         p.copy(bottomImg, p.mouseX, p.mouseY, 10, 10, p.mouseX, p.mouseY, 10, 10);
//       } else {
//         bottomImg.resize(648, 360);
//         p.copy(bottomImg, p.mouseX, p.mouseY, 20, 20, p.mouseX, p.mouseY, 20, 20);
//       }
//     }

//     windowResized = function() {
//       // Reload the top image.
//       if (p.windowWidth < 1126){
//         p.resizeCanvas(162, 90);
//       } else {
//         p.resizeCanvas(648, 360);
//       }
//       p.clear();
//       if (p.windowWidth < 1126){
//         topImg.resize(162, 90);
//         p.image(topImg, 0, 0);
//       } else {
//         topImg.resize(648, 360);
//         p.image(topImg, 0, 0);
//       }
//     }
//   }
// };
// var myp5 = new p5(sOne, 'scratch1');

// // Sketch Two
// var sTwo = function( p ) { 
//   p.setup = function() {
//     p.describe(
//       'First find my face scratch card. The cursor, when dragged across the card, scratches at the squares with a coin to reveal them.'
//     );
//     if (p.windowWidth < 1126){
//       p.createCanvas(162, 90);
//       p.image(topImg, 0, 0);
//     } else {
//       p.createCanvas(648, 360);
//       p.image(topImg, 0, 0);
//     }

//     if (p.windowWidth < 1126){
//       p.resizeCanvas(162, 90);
//     } else {
//       p.resizeCanvas(648, 360);
//     }
//     p.clear();
//     if (p.windowWidth < 1126){
//       topImg.resize(162, 90);
//       p.image(topImg, 0, 0);
//     } else {
//       topImg.resize(648, 360);
//       p.image(topImg, 0, 0);
//     }
//   };

//   p.draw = function() {
//     // Hide the cursor and replace it with a picture of a coin.
//     p.noCursor();
//     p.cursor('../img/DGcoin.png', 0, 0);
    
//     // Using the copy() function, copy the bottom image
//     // on top of the top image when you drag your cursor
//     // across the canvas.
//     p.mouseDragged = function() {
//       if (p.windowWidth < 1126){
//         bottomImg.resize(162, 90);
//         p.copy(bottomImg, p.mouseX, p.mouseY, 10, 10, p.mouseX, p.mouseY, 10, 10);
//       } else {
//         bottomImg.resize(648, 360);
//         p.copy(bottomImg, p.mouseX, p.mouseY, 20, 20, p.mouseX, p.mouseY, 20, 20);
//       }
//     }

//     p.windowResized = function() {
//       // Reload the top image.
//       if (p.windowWidth < 1126){
//         p.resizeCanvas(162, 90);
//       } else {
//         p.resizeCanvas(648, 360);
//       }
//       p.clear();
//       if (p.windowWidth < 1126){
//         topImg.resize(162, 90);
//         p.image(topImg, 0, 0);
//       } else {
//         topImg.resize(648, 360);
//         p.image(topImg, 0, 0);
//       }
//     }
//   }
// };
// var myp5 = new p5(sTwo, 'scratch2');