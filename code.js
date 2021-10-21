var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Variáveis
var Sofia = (createSprite(30,35,20,20));
var papelao = (createSprite(165,18,20,190));
var papelao1 = (createSprite(1,85,250,20));
var papelao2 = (createSprite(65,200,100,20));
var papelao3 = (createSprite(210,65,90,20));
var papelao4 = (createSprite(165,308,20,150));
var papelao5 = (createSprite(216,300,120,20));
var papelao6 = (createSprite(216,172,20,120));
var papelao7 = (createSprite(320,275,20,190));
var papelao8 = (createSprite(200,400,400,20));
var papelao9 = (createSprite(200,0,400,20));
var papelao10 = (createSprite(400,220,20,350));
var papelao11 = (createSprite(256,108,100,20));
var papelao12 = (createSprite(300,65,100,20));
var papelao13 = (createSprite(30,340,20,100));
var papelao14 = (createSprite(90,320,20,50));
var papelao15 = (createSprite(1,200,20,600));
var papelao16 = (createSprite(60,220,20,50));
var papelao17 = (createSprite(132,300,20,100));
var papelao18 = (createSprite(150,150,130,20));
var papelao19 = (createSprite(200,2,20,140));
var papelao20 = (createSprite(350,200,80,20));
var papelao21 = (createSprite(296,80,20,50));
var moeda = createSprite(360,229,20,20);


function draw() {
  background("brown");
  drawSprites();
  createEdgeSprites();
  
  //Cor dos sprites
  
  Sofia.shapeColor = "white";
  papelao.shapeColor = "black";
  papelao1.shapeColor = "black";
  papelao2.shapeColor = "black";
  papelao3.shapeColor = "black";
  papelao4.shapeColor = "black";
  papelao5.shapeColor = "black";
  papelao6.shapeColor = "black";
  papelao7.shapeColor = "black";
  papelao8.shapeColor = "black";
  papelao9.shapeColor = "black";
  papelao10.shapeColor = "black";
  papelao11.shapeColor = "black";
  papelao12.shapeColor = "black";
  papelao13.shapeColor = "black";
  papelao14.shapeColor = "black";
  papelao15.shapeColor = "black";
  papelao16.shapeColor = "black";
  papelao17.shapeColor = "black";
  papelao18.shapeColor = "black";
  papelao19.shapeColor = "black";
  papelao20.shapeColor = "black";
  papelao21.shapeColor = "black";
  moeda.shapeColor = "yellow";
  
  
  
  //Todos os Ifs
  
  if (Sofia.isTouching(papelao)||Sofia.isTouching(papelao1)||Sofia.isTouching(papelao2)||Sofia.isTouching(papelao3)|| Sofia.isTouching(papelao4)||Sofia.isTouching(papelao5)||Sofia.isTouching(papelao6)||Sofia.isTouching(papelao7)||Sofia.isTouching(papelao8)||Sofia.isTouching(papelao9)||Sofia.isTouching(papelao10)||Sofia.isTouching(papelao11)||Sofia.isTouching(papelao12)||Sofia.isTouching(papelao13)||Sofia.isTouching(papelao14)||Sofia.isTouching(papelao15)||Sofia.isTouching(papelao16)||Sofia.isTouching(papelao17)||Sofia.isTouching(papelao18)||Sofia.isTouching(papelao19)||Sofia.isTouching(papelao20)||Sofia.isTouching(papelao21)){
  text("VOCE PERDEU", 200, 200);
  Sofia.x=30;
  Sofia.y=35;
  
  }
  if(keyDown("W")||keyDown("UP_ARROW")){
  Sofia.y=Sofia.y-3;
  }
  
  if (Sofia.isTouching(moeda)){
  moeda.x=500;
  moeda.y=500;
  playSound("assets/moeda.mp3", false);
  }
  
  if(keyDown("S")|| keyDown("down")){
  Sofia.y=Sofia.y+3;
    
  }
  
  if(keyDown("A")|| keyDown("left")){
  Sofia.x=Sofia.x-3;
    
  }
  
  if(keyDown("D")|| keyDown ("RIGHT_ARROW")){
  Sofia.x=Sofia.x+3;
  
  }

  if (Sofia.collide(rightEdge)){
    text ("VOCÊ GANHOU!",200,200);
  
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
