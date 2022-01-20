let sandpiles;
let row=60;
let col=60;
let sz = 10;
let numTick;
let torusTick;
let sandbutton;
let clearbutton;
let sandslider;
let sandamout;
let myp;
let cntrGrains;


function setup() {
  createCanvas(600, 600);
  noStroke();
  textSize(sz);
  textAlign(LEFT,TOP);
  sandpiles = twoDee(col,row,0);
  sandpiles[col/2][row/2]=1000;
  numTick = createCheckbox("numbers",false);
  torusTick = createCheckbox("Torus", true);
  sandbutton= createButton("add sand")
  sandbutton.size=(50,50);
  sandSlider =createSlider(1,1000,5);
  sandSlider.style('width','200px');
  sandSlider.changed(amtSand)
  sandbutton.mousePressed(addSand);
  clearbutton= createButton("clear it")
  clearbutton.size=(50,50);
  clearbutton.mousePressed(clearit);
  myp =createP("grains to add: "+sandSlider.value())
  cntrGrains =createP("#grains in center: "+sandpiles[col/2][row/2]);
}

function draw() {
  background(0);
  showIt();
  if (torusTick.checked()){
  toppleTorus();
  }else{
    topple();
  }
}


function showIt() {
  cntrGrains.html("#grains in center: "+sandpiles[col/2][row/2]);
  let txtnum; // place to hold the text of the number
  for (let x =0; x<col; x++) {
    for (let y =0; y<row; y++) {
      let num = sandpiles[x][y];
      let col = color(0,(20*num),0); // locally define col
      if (num == 0) {
        col = color('#0524E8');
      } else if (num ==1) {
        col = color('#0595FF');
      } else if (num ==2) {
        col = color('#FFF705');
      } else if (num ==3) {
        col = color('#FF4805');
      }
      fill(col);
      if (num>=4){
       txtnum= "#";
      }else{
        txtnum = str(num);
      }
      if(numTick.checked()){
        text(txtnum,x*sz,y*sz);
      }else{
        rect(x*sz, y*sz, sz, sz);
      }
    }
  }
}


function toppleTorus() {
  let nextpiles = twoDee(col,row,0);
   
  for (let x =0; x<col; x++) {
    for (let y =0; y<row; y++) {
      let num = sandpiles[x][y];
      if (num<4) {
        nextpiles[x][y] += sandpiles[x][y];
      }else {  // pile has more than 3
        nextpiles[x][y] += sandpiles[x][y]-4;
        nextpiles[(x+1)%col][y]++;  // right
        nextpiles[(x+col-1)%col][y]++; // left
        nextpiles[x][(y+1)%row]++; // down
        nextpiles[x][(y+row-1)%row]++;// up
      }
    }
  }
  sandpiles= nextpiles.map(inner => inner.slice()) // https://stackoverflow.com/questions/45949241/why-cant-i-make-a-copy-of-this-2d-array-in-js-how-can-i-make-a-copy
}


function topple() {
  let nextpiles = twoDee(col,row,0);
   
  for (let x =1; x<col-1; x++) {
    for (let y =1; y<row-1; y++) {
      let num = sandpiles[x][y];
      if (num<4) {
        nextpiles[x][y] += sandpiles[x][y];
      }else {  // pile has more than 3
        nextpiles[x][y] += sandpiles[x][y]-4;
        nextpiles[(x+1)][y]++;  // right
        nextpiles[(x-1)][y]++; // left
        nextpiles[x][(y+1)]++; // down
        nextpiles[x][(y-1)]++;// up
      }
    }
  }
  sandpiles= nextpiles.map(inner => inner.slice()) // https://stackoverflow.com/questions/45949241/why-cant-i-make-a-copy-of-this-2d-array-in-js-how-can-i-make-a-copy
}

function addSand(){
  sandpiles[col/2][row/2]+=sandSlider.value();
}

function clearit(){
  sandpiles = twoDee(col,row,0);

}

function amtSand(){
  
  myp.html("grains to add: "+sandSlider.value());
}


function twoDee(col, row,data){
  // makes a two 2 array fills it with data and returns it
  arr = new Array(col);
  for (let i =0; i< arr.length; i++){
    arr[i] = new Array(row);
  }
  
  for (let i =0; i <col;i++){
    for(let j =0; j< row;j++){
      arr[i][j] = data;
    }
  }
  return arr;
  
} 
