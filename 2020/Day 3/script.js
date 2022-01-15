/*
 * DAY 3 (I)
 * 
 * You make a map (your puzzle input) of the open squares (.) and trees (#) you can see.
 * The same pattern repeats to the right many times.
 * You start on the open square (.) in the top-left corner and need to reach the bottom
 * (below the bottom-most row on your map).
 * Starting at the top-left corner of your map and following a slope of right 3 and down
 * 1, how many trees would you encounter?
 */


let grid =                                      // Create a Template Literal using ` `
`............#....#.............
...........##....#......#..#..#
......#.......#......#.........
..#.#....#....#.............##.
..#........####....#...#.......
..##.....#.#.#..#.........#....
...#.#..#..#....#..#..#........
#.......#.........#....##.###..
......##..#.#...#.......#.#....
................##.........#.##
..##..........#...#.........#.#
..........#...##...............
#...#......#..#.#..#...##..#...
..##....#.......#......#..#....
....#......#......#....#.......
.........#.....#..#............
.#...#.#.........#........#....
#..........####.....#..........
......##.....#....#..#........#
#......#......#...........#....
....#.........#....#...#..#..#.
.#........#......#.#.....#.....
..#.#.#..........#....#.......#
......#.#........##....##....##
.....#.#..#...#................
......#......##...............#
..#..##.............#...##.....
......##......##..#......#.....
....#.............#..##.....##.
........#...............##.....
..#......#.##..#...#....#...#..
#......#.......#.............#.
.....#....##..............#....
#.#.........#....#..##....#....
.#...#...#....#.#............#.
...#...#.#..##.##.......##.....
......#..#....##..#.#..#..#....
.......##..#..#......#..#.....#
.##..#......#..........#....#..
.....#................#..#....#
........#..#....#.......#....#.
..#......#.......#......#....#.
....#...#.##........##....#....
.....#........#...........#....
...#....##..........#..#...#.#.
...#.......#......#...##...#...
.#.....#........#........#.#..#
.#.........#..##.....#.......#.
....#..#....#.......#......#...
.#.#...##..##................##
......#.#...#.......#....#....#
........#....#..#.....#......#.
.......#..........#......#.....
...............................
..#..#####..#..#..........#.#..
.....#....##................#.#
.................##............
.#...#...#..#...........#...##.
..#..#.#...........#.....##....
.#.......#.....#..##..#.#....#.
..........#.#......##...##.....
........##..#......##...#......
#......................#.......
............#.....#....#.#...#.
#......#..........##..#........
.........#.......#...#.#.......
...........##....#........#....
#........#.....#...#........##.
.#......##......#.##.......#..#
.....#......#.#......#.......#.
.....#.#.........#.............
...........#..#....#.....#.#...
...#............#...#..........
..#..#...#.....................
......#..#...#....#............
.#.#.#........#..#...#.........
..........#........#..#........
..............#...#....#.......
..#....#....##.......#...#.##..
.#.........#...#......#........
..#......#...#.........##.#...#
...#.....#...#..#.............#
.##........#.#.#.............#.
..#.............#..#.#...#....#
#...#.........#......#......#..
.......##..#.#..........#...#..
.......#.............#..#.#....
.#..#....#.#...................
....##...#..#....#..#..........
....#.#............#...........
###........##..#.#..#..........
.#.#.#.......#...........#..#.#
..........##..#.............#..
.#...........#......#.#..#..##.
...###......#.##........#.....#
....#..#..#...#................
...#.....#........#............
....#...#...#..#..##.##.......#
#.......#......#....#.......#..
#.............#...#............
##......#..#...#....##.#...#...
.##....................#....#..
..#.....#....#.#....#......#...
.......#..#..#............#...#
.#.....#.......#..#..#..#......
......##.......................
#..#...#.#.#....#.....#..#.....
...................#...#...#...
........#....##..#....#........
##......#.#......##.###........
.........#...##................
.......#...#...#.......##......
....#.......#......#.........##
....#....#.#..#.....#..........
...........#.......#........#..
..#.........###.#........#.....
.......#...........#.#.....##..
..#...#..#..........#..........
..........#.#....#.............
.##....#........##.............
.............#.#####........#.#
.................##...#........
##...#.#.......##........#.....
.#...#...#..#..#....#....#.....
..#...#........#..#............
##...#.#........#......##.#..##
.##......#..............##.#..#
.........#...#............#...#
....#..#....#...........#......
........#..#....#...##...#.....
..#..............#...#.#.....#.
.#.......#.#.....#..###.......#
...................#.......#...
........##.....#..#.......##...
.....#....................#...#
...#.#....#............#.#.....
#.......#.......#....#.........
..#...............#............
##...#...#...#..............#..
...#..........#..#....##.......
#............##.##......#.#.#..
.#...........#.........#....##.
..##....##.#....#.#.#.##...##.#
........#.#.#.............#....
.#...........#....##...#...#.#.
.##...#.................#......
....#.#..#....................#
.##......#........#..#.........
...#...............#...........
.#.#..##..##.#........#........
...........#....#.#.#......#...
...................#........#.#
..#............#...#.#........#
....#....#.#.##......#...#.....
..................#............
..........................#....
........#......................
......#.#...#.#..##......#.#.#.
.........#...#..#..............
..#.......#..........##..#.....
.........#............#........
......#..#..#...###....#....#..
#..#..............##.###..##..#
.#..................#.....#...#
........#........#........#....
.........#........#.##......#..
..#.....#.#..###...#....#......
..#................##....#.....
..#.#....##.....#......##...#..
...#.......#........##.........
#........#...#.#..........##..#
................#...#.#.....#..
.........#..#..#.#..#.#...#....
##....#...##.........#.#...#.##
....#..#.....##.....#.....##...
................#............#.
..#..#...#.....#......#.....##.
....#.......#...#...#...#..#...
....#..##....#.###.#...#..#....
#..##.....#.....#.##..##...##.#
.............###..........#....
..................#.....###....
..........#....#...#......#....
...#..##.......#......#.#...#..
..#.......................##.#.
..#..#..#....#......#...#...##.
#.............#................
..........#.#.#.........#.#....
.....##..#......##.#...........
.#.#.#.#....#.#...#.....#.#...#
......#.....##..............##.
#..#.......##..##..............
#..#..#................###.....
.....#......#.........#........
#...........#........#.#.......
#........#.#...#....#....###..#
###..#.#...........#.##.....#.#
..#..........#..#............#.
...#....#.......#..#.....###...
.#....#.##.#..###..............
.....#.##.##.......###.##...#.#
..#..##.......###..............
.#.........###..#..............
..................###.....#..#.
#....#....#.........#.....#....
.........#.#..#....#.....#.....
....##.......##.......#.#......
.....#...#.##.....#............
....#.#.#.......#..............
.##..#.#..#.......##...........
....#....##..#.....##.......#.#
.....##....#..#.#........#.....
........#.#.#....#....##...#..#
..#......#.#.#..#.##....#.#.#..
..#...#........#..#..........#.
.........#...................#.
........#.....##..#....#....#..
#..............#..........#....
#........#.#...........#.#.....
..#......................#.#..#
.........#.#.....#.#..........#
......#....#.#.##........#.....
.#....##......##..#...#.......#
..#........#...#.##....#..#.#..
.......#.....#..........#.....#
.........#.#..#.........#....#.
..........#.##.........##..#...
......#.#..#.....#.#..........#
......#.#.#..#..#.#............
...##.#..#..............#....#.
#..........#...................
.#....#..#.#.......#........#..
...#...#......#....#......#....
..#.#.......#.......#.......#.#
...#.#...#........#.....#......
#.......#..#...................
#..#..#.............#..#..#..#.
#.......................#....##
.#.........#....#....#.........
...............#...#..#....#..#
#.....#.#...#.#.....#..........
....##.#..#...#.#....###...#.#.
.................#....#........
####.......##...##.......#.##..
#..#....#....##............#...
..##......#..#........#........
....#..#..........#......#...##
..#.#.............#...........#
#...............#...#.......#.#
#..#.........#.##.#.......#...#
......#.....#.............#...#
......#.##.........##...#......
..#......##.#........#.......#.
#..#.........#.##..............
..#....#...#...#..#.....#.#....
................#.......#......
#.....#..............##....#.##
##.....#...#.#.....#..##...#...
#.#............##..........#..#
..#.##......#..#....#..........
....##.#....#.......##.....#...
......#.#....###...#...........
..................#......#....#
..............##...............
......#..#....#.....#..........
.......#........#...#..........
..#......#......##..#.##..#....
..#.#...#...............#......
....#.#.............#.#......#.
....#.#.....#......#..#.......#
........................#..#...
.................#...........#.
#......#......#.#.#.....##.....
..#....##...#.....##.#.....#..#
....#.........#....#.##.#.#....
..#....###.....................
.....#.#....#......#....##....#
#.......#...#......##.......#..
#....#.........##.....#........
#.....#...........#..#.....#...
.................#.....#..##..#
..#...#......####...##.........
...............................
#........#.....#...............
.#.........#....#.#......##....
...#..........#.........#.#.#.#
......##......#....###........#
.....................#.#.#.....
......#..#..#.......#...#......
...##.#.............#.#.......#
..#.#...#..#....#.....#.....#..
..#..#.....................#..#
........#....#..........#..#...
#.##....#..#.#..#............#.
..............###.............#
.#.#..........#.#....#...#....#
....#..........#.#..#......#...
.........##.#...#..............
..................#.....#.#....
.#....#.......#.##.#.........#.
.##..#...#......#..#...........
.#.........#..........#.#......
#.#......#.#.#.#.......#...#.#.
.......#....#.#......#......#..
...#..#....#.#..#..##...##.....
#.#.#.......#....#.........##..
#..#....#........###....#.#....
....#..#.........#....#...#....
...#.#.#.#..#..##.....#.##.....
.......#.......#...............
#.#.#......##....#.............
...#.##........#.....#...##.#..
...#.#.###..........#.......#..
.....#...#.......#.........#...
............#..#...#..##.......
...#....#..##.##..........#.##.
..................#........#...
....#.##.#.##........#.#.......
.#...........##.....##.......#.
#...#.........#.....##.........
#..#....#.#.........#..........
..#......#.#.#......#.....#..#.
..##......#..............#.....`

grid = grid.split('\n');

let tobogganTrees = (slopeRight, slopeDown) => {
    let row = slopeDown;
    let col = slopeRight;
    let treeCounter = 0;
    let checkTree = pos => pos === '#';
    
    while (row < grid.length) {
        if (col >= grid[row].length) {
            col -= grid[row].length;
        }

        checkTree(grid[row][col]) ? treeCounter++ : 0;
        
        row += slopeDown;
        col += slopeRight;
        
    }
    
    return treeCounter;
}
console.log(tobogganTrees(3, 1));


/*
 * DAY 3 (II)
 * 
 * Determine the number of trees you would encounter if, for each of the following
 * slopes, you start at the top-left corner and traverse the map all the way to the
 * bottom:
 *  Right 1, down 1.
 *  Right 3, down 1. (This is the slope you already checked.)
 *  Right 5, down 1.
 *  Right 7, down 1.
 *  Right 1, down 2.
 * What do you get if you multiply together the number of trees encountered on each of
 * the listed slopes?
 */

let slope1 = tobogganTrees(1, 1);
let slope2 = tobogganTrees(3, 1);
let slope3 = tobogganTrees(5, 1);
let slope4 = tobogganTrees(7, 1);
let slope5 = tobogganTrees(1, 2);

console.log(slope1 * slope2 * slope3 * slope4 * slope5);