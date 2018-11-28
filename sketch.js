var mySong;
var analyzer;
var volhistory = [];
var lightx;

function preload() {
  // put preload code here
  mySong = loadSound("./assets/flower.mp3");
  myImage1 = loadImage("./assets/film.png");
  myImage2 = loadImage("./assets/film2.png");
  myImage3 = loadImage("./assets/film3.png");
  myImage4 = loadImage("./assets/film4.png");
  myImage5 = loadImage("./assets/film5.png");
  myImage6 = loadImage("./assets/film6.png");
  myImage7 = loadImage("./assets/film7.png");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  mySong.play();
  analyzer = new p5.Amplitude();
  mySong.play();
  angleMode(DEGREES);


}

function draw() {
  clear();
  background(10);
  image(myImage1, 100, 100, windowWidth, windowHeight);



  // put drawing code here
  fill(255);
  textFont('Arial Black')
  textSize(40);
  text('Enjoy the movie', 300, 40);

  // if (mouseX > 600 || mouseX < 100) {
  //   //stop
  //   mySong.pause();
  // } else {
  //   //play
  //   if (mySong.isPlaying() == false) {
  //     mySong.loop();
  //   }
  // }

  //soundillustrator
  var vol = analyzer.getLevel();
  console.log(vol);

  var a = 200 * vol;





  if (a < 8) {
    image(myImage3, 100, 100, windowWidth, windowHeight);
    image(myImage5, 100, 100, windowWidth, windowHeight);
    // filter("posterize", 6);

  }
  if (a > 8 && a < 16) {
    image(myImage4, 100, 100, windowWidth, windowHeight);
    image(myImage6, 100, 100, windowWidth, windowHeight);
    // filter("posterize", 3);

  }
  if (a > 16) {
    image(myImage7, 100, 100, windowWidth, windowHeight);
    image(myImage2, 100, 100, windowWidth, windowHeight);
    // filter("posterize", 9);

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
