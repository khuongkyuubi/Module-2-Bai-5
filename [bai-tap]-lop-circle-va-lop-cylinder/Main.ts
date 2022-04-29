import {Cylinder} from "./Cylinder";

let cylinder = new Cylinder(10, "green", 20);
console.log(cylinder)

cylinder.radius = 15;
cylinder.color = "blue";
cylinder.height = 25;

console.log(cylinder)
console.log(cylinder.getArea());
console.log(cylinder.getPerimeter());
console.log(cylinder.getFullArea());
console.log(cylinder.getVolume());
console.log(cylinder.getAroundArea());

