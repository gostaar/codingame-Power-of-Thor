var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const Tx = parseInt(inputs[2]); // Thor's starting X position
const Ty = parseInt(inputs[3]); // Thor's starting Y position
let ThorX = Tx;
let ThorY = Ty;

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
   let directionX = '';
   let directionY = '';

   if (ThorX > lightX){
    directionX = "W";
    ThorX--;
   } else if (ThorX < lightX){
    directionX = "E";
    ThorX++;
   } else { directionX = ""; }

   if (ThorY > lightY){
       directionY = "N";
       ThorY--;
   } else if (ThorY < lightY) {
       directionY = "S";
       ThorY++;
   } else { directionY = ""; }

   print(directionY + directionX);
     
}
