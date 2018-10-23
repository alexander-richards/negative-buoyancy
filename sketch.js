var state = 1;
    trans = 0;
    yvar = -5;
    cSpace = 80;
    c2Space = 210;
    p = 1;
    pS = -150

function preload(){
}

function setup(){
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
}

function draw(){
    if (state==1){
        stateOne();
    } else if (state==2){
        stateTwo();
    } else if (state==3){
        stateThree()
    }
}

function keyPressed(){
    if(state==1 && frameCount>250 && keyCode==32 && trans==0){
        trans=1
    } else if (state==2 && keyCode==32){
        if (trans==0){
            trans=1
        } else if(trans==1){
            trans=0;
            state=2
        }
    }

}
