function moveCube(side, dir) {
const sides = [
[0, 5, 4, 1], // Front
[2, 3, 6, 7], // Back
[1, 0, 3, 2], // Top
[4, 5, 6, 7], // Bottom
[1, 4, 7, 3], // Left
[0, 2, 5, 6], // Right
];

// Move the specified side in the specified direction.
if (dir == "clockwise") {
[sides[side][0], sides[side][1], sides[side][2], sides[side][3]] =
[sides[side][3], sides[side][0], sides[side][1], sides[side][2]];
} else if (dir == "counterclockwise") {
[sides[side][0], sides[side][1], sides[side][2], sides[side][3]] =
[sides[side][1], sides[side][2], sides[side][3], sides[side][0]];
}
}