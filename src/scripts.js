$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    //ShowDeskAnimation();
    //AnimateComputers();
    AddDeskScrollAnimation();
    IntroduceButton();

    console.log("READY FUNC ENDED");
});

//Intro and other animations for the computers.
var AnimateComputers = function(){
    const tweenAnimIn = new TimelineMax();
    var itemName = "";
    const xpos = -100, ypos = 70;
    for (i = 8; i <= 11; i++) {
        itemName = "#OD" + i;
        tweenAnimIn.from(itemName, 0.05, {
            x:xpos,
            y:ypos,
            autoAlpha: 0,
            ease:Expo.easeOut
        });
    }
};

///Shows the office desk animation immediately.
var ShowDeskAnimation = function(){
    const tweenAnimIn = new TimelineMax();
    const tweenAnimIn2 = new TimelineMax();
    const tweenAnimIn3 = new TimelineMax();
    var itemName = "";
    const xpos = -100, ypos = -70;
    for (i = 1; i <= 11; i++) {
        itemName = "#OD" + i;
        tweenAnimIn.from(itemName, 0.1, {
            x:xpos,
            y:ypos,
            autoAlpha: 0,
            ease:Expo.easeOut
        });
        itemName = "#OD" + (i + 1);
        tweenAnimIn2.from(itemName, 0.2, {
            x:xpos,
            y:ypos,
            autoAlpha: 0,
            ease:Expo.easeOut
        });
        itemName = "#OD" + (i + 2);
        tweenAnimIn3.from(itemName, 0.3, {
            x:xpos,
            y:ypos,
            autoAlpha: 0,
            ease:Expo.easeOut
        });
        i+=2;
    }
};

var IntroduceButton = function(){
    const tweenAnimIn = new TimelineMax();
    tweenAnimIn.from("#contact_button", 3, {
        y:-20,
        autoAlpha: 0,
        ease:Expo.easeOut
    });
};

///Adds the scroll animation for the desk svg.
var AddDeskScrollAnimation = function(){
    const triggerElement ='#table_animation_trigger';
    const controller = new ScrollMagic.Controller();

    for(i = 1; i <= 11; i++){
        new ScrollMagic.Scene({triggerElement: triggerElement,duration:800})
        .setTween("#OD"+i, {y:(0-(i*80)), autoAlpha:0})
        .addTo(controller);
    }
};