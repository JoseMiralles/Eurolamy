$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    /*Show the intial animation and then
    activated the scrill animation to
    avoid timeline issues.*/
    ShowDeskAnimation();
    IntroduceButton();

    console.log("READY FUNC ENDED");
});

/*Button animation*/
var IntroduceButton = function(){
    const tweenAnimIn = new TimelineMax();
    tweenAnimIn.from("#contact_button", 3, {
        y:-20,
        autoAlpha: 0,
        ease:Expo.easeOut
    });
};

/*HERO ANIMATIONS*/
///Shows the office desk animation immediately.
var ShowDeskAnimation = function(){
    const tweenAnimIn = new TimelineMax();
    //const tweenAnimIn2 = new TimelineMax();
    //const tweenAnimIn3 = new TimelineMax();
    var itemName = "";
    const xpos = -100, ypos = 70;
    for (i = 1; i <= 11; i++) {
        itemName = "#OD" + i;
        tweenAnimIn.from(itemName, 2, {
            x:xpos,
            y:ypos,
            autoAlpha: 0,
            ease:Expo.easeOut
        },"-=1.7").eventCallback("onComplete", function(){
            /*Add the scroll animation untill the first animation is done*/
            AddDeskScrollAnimation();
        });
    }
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