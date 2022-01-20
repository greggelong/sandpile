# sandpile
a place to hold and run a p5js version of the sandpile sketches
## sandpiles
 
 https://www.instagram.com/p/CY4IIRYoNmR/
 
 https://www.instagram.com/p/CY6aNSPIo05/
 
Sandpile with numbers of grains of sand in each cell. There is a 2d array that keeps track of the number of grains at the cells x y position. The max number of grains of sand in a cell is 3. The  ‘#’ indicates that the cell contains 4 or greater.  If a cell has four or greater it gives up one grain to each of its 4 neighbors (NSEW neighbors not all eight neighbors).  The next generation of the board is done like the game of life. A second array keeps track of the changes, so not to overwrite changes on the original. When all the cells are checked and all the overflows for one generation are updated the original array is set to the new array and the process repeats.  There is a great #numberphile video, #thecodingtrain code challenge  and most recently Jordan Ellenberg’s https://nautil.us/issue/107/the-edge/the-math-of-the-amazing-sandpile
 #creativecoding #processing #math #sandpile #p5js #math  

 I have processing versions of this in
 
 https://github.com/greggelong/processingInTheOffice2021
 
 
 You can interact with this live at:
 
 https://greggelong.github.io/sandpile/
 
 
