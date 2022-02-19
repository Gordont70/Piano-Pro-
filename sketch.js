var piano
var key01
var key02
var key03
var key04
var key05
var key06
var key07
var key08
var key09
var key10
var key11
var key12
var key13
var key14
var key15
var key16
var key17
var key18
var key19
var key20
var key21
var key22
var key23
var key24
var button01




function preload() {
  pianoImage = loadImage("./assets/Piano F.jpg")
  key01 = loadSound("./assets/key01.mp3")
  key02 = loadSound("./assets/key02.mp3")
  key03 = loadSound("./assets/key03.mp3")
  key04 = loadSound("./assets/key04.mp3")
  key05 = loadSound("./assets/key05.mp3")
  key06 = loadSound("./assets/key06.mp3")
  key07 = loadSound("./assets/key07.mp3")
  key08 = loadSound("./assets/key08.mp3")
  key09 = loadSound("./assets/key09.mp3")
  key10 = loadSound("./assets/key10.mp3")
  key11 = loadSound("./assets/key11.mp3")
  key12 = loadSound("./assets/key12.mp3")
  key13 = loadSound("./assets/key13.mp3")
  key14 = loadSound("./assets/key14.mp3")
  key15 = loadSound("./assets/key15.mp3")
  key16 = loadSound("./assets/key16.mp3")
  key17 = loadSound("./assets/key17.mp3")
  key18 = loadSound("./assets/key18.mp3")
  key19 = loadSound("./assets/key19.mp3")
  key20 = loadSound("./assets/key20.mp3")
  key21 = loadSound("./assets/key21.mp3")
  key22 = loadSound("./assets/key22.mp3")
  key23 = loadSound("./assets/key23.mp3")
  key24 = loadSound("./assets/key24.mp3")

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  piano = createSprite(windowWidth/2-11, windowHeight/2+233);
  piano.addImage("piano", pianoImage);
  piano.scale = 2.0

  button01 = createSprite(200,200,50,110)
  fill(0,110,110)

  
  
  
  
  
  


}

function draw() {
  background('white')

  
  
  Splay();
  drawSprites();
}

function Splay(){
  if(keyDown('A')){
    key01.play();
    key01.setVolume(0.25);
    text("F",550,250)


    
  }

  if(keyDown('W')){
    key02.play();
    key02.setVolume(0.25);
    text("F #",550,250)


    
  }

  if(keyDown('S')){
    key03.play();
    key03.setVolume(0.25);
    text("G",550,250)


    
  }

  if(keyDown('E')){
    key04.play();
    key04.setVolume(0.25);
    text("G #",550,250)


    
  }

  if(keyDown('D')){
    key05.play();
    key05.setVolume(0.25);
    text("A",550,250)


    
  }

  if(keyDown('R')){
    key06.play();
    key06.setVolume(0.25);
    text("A #",550,250)


    
  }

  if(keyDown('F')){
    key07.play();
    key07.setVolume(0.25);
    text("B",550,250)


    
  }

  if(keyDown('T')){
    key08.play();
    key08.setVolume(0.25);
    text("C",550,250)


    
  }

  if(keyDown('G')){
    key09.play();
    key09.setVolume(0.25);
    text("D",550,250)


    
  }
  if(keyDown('Y')){
    key10.play();
    key10.setVolume(0.25);
    text("D #",550,250)


    
  }
  if(keyDown('H')){
    key11.play();
    key11.setVolume(0.25);
    text("E",550,250)


    
  }
  if(keyDown('U')){
    key12.play();
    key12.setVolume(0.25);
    text("F",550,250)


    
  }
  if(keyDown('J')){
    key13.play();
    key13.setVolume(0.25);
    text("F #",550,250)


    
  }
  if(keyDown('I')){
    key14.play();
    key14.setVolume(0.25);
    text("G",550,250)


    
  }
  
  

  


  

}




