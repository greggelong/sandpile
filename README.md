# sandpile
a place to hold and run a p5js version of the sandpile sketches
## sandpiles
 
 https://www.instagram.com/p/CY4IIRYoNmR/
 
 https://www.instagram.com/p/CY6aNSPIo05/
 
Sandpile with numbers of grains of sand in each cell. There is a 2d array that keeps track of the number of grains at the cells x y position. The max number of grains of sand in a cell is 3. The  ‘#’ indicates that the cell contains 4 or greater.  If a cell has four or greater it gives up one grain to each of its 4 neighbors (NSEW neighbors not all eight neighbors).  The next generation of the board is done like the game of life. A second array keeps track of the changes, so not to overwrite changes on the original. When all the cells are checked and all the overflows for one generation are updated the original array is set to the new array and the process repeats.  There is a great #numberphile video, #thecodingtrain code challenge  and most recently Jordan Ellenberg’s https://nautil.us/issue/107/the-edge/the-math-of-the-amazing-sandpile
 #creativecoding #processing #math #sandpile #p5js #math  

have done some more work on the sand piles not with simpler with one loop.  

have also made a version on a torus using modulo

the large amout dropped in the center will then continue forever with some interesting patterns

doubling time is seen.  I havent found a good setting for a chaotic mess but I am sure it is there

I have also made a version to place many grains of sand in all of the cells

bu this looks better when it is on a closed plane not a tours

I have uploaded all  of these versons.  I have not improved the earlier versions with one loop

but I will make a seperate repo for sand piles and make a p5 version to use on the web

 
