function stateOne(){
    // can change this so the location of the water can be easily animated, rather than fixed

    if (trans==0){
        p=1;
    } else if (trans==1){
        p=p-1;
    }

    noStroke()
    background(80,80,80);
    fill(210,210,210)
    if (p>pS){
        rect(0,0,width,height/2+p);
        for(i=0;i<40;i++){
            arc(0+i*15,
            map(sin(frameCount/30+i),-1,1,height/2-6+p,height/2+p),
            100,
            map(cos(frameCount/30+i),-1,1,20,30),
            0,
            PI,
            OPEN)
        }
    } else {
        rect(0,0,width,height/2+pS);
        for(i=0;i<40;i++){
        arc(0+i*15,
        map(sin(frameCount/30+i),-1,1,height/2-6+pS,height/2+pS),
        100,
        map(cos(frameCount/30+i),-1,1,20,30),
        0,
        PI,
        OPEN)
        }
    }
        //text loading  
            // should be able to do this just so it adjusts the alpha
            // where each text element fades in from transparent

    if(frameCount>100){
        fill(0);
        textSize(40);
        if (yvar <height/4 && trans==0){
            text("test title", width/2,yvar+p);
            yvar=yvar+2;
        } else {
            text("test title", width/2,yvar+p);
            }
        }
    if(frameCount>150 && c2Space>100 && trans==0){
            fill(c2Space,c2Space,c2Space);
            textSize(20);
            text("a j r", width/2,height/3+p);
            c2Space=c2Space-1
        } else if (frameCount>150) {
            fill(100);
            textSize(20);
            text("a j r", width/2,height/3+p);
        }
    if(frameCount>250 && cSpace<200&& trans==0){
            fill(cSpace,cSpace,cSpace);
            textSize(20);
            text("[ press space ]", width/2,height/2+150+p);
            cSpace=cSpace+1
        } else {
            fill(cSpace,cSpace,cSpace);
            textSize(20);
            text("[ press space ]", width/2,height/2+150+p);
        }
    if (p<-(height/2+151)){
        state=2;
    }
}
