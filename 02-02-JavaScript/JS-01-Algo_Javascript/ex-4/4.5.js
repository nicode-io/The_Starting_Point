
// Exercise 4.5 - OK
/**
 * Calculate distance between two points  - Using Pythagorean theorem
 * @param  {Number}  xA    Value x of location point A
 * @param  {Number}  yA    Value y of location point A
 * @param  {Number}  xB    Value x of location point B
 * @param  {Number}  yB    Value y of location point B
 * @return {number}        Distance between A and B
 */
function calcDistance(xA, yA, xB, yB) { 
	xDiff = xA - xB; 
	yDiff = yA - yB;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
// Test
console.log(calcDistance(-2,2,2,-2));
