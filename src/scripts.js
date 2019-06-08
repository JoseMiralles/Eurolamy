$(document).ready(function () {
    /*Show the intial animation and then
    activated the scrill animation to
    avoid timeline issues.*/
    ShowDeskAnimation();

    AddParalax("#port_target_1", "#port_trigger_1");
    AddParalax("#port_target_2", "#port_trigger_2");
    AddParalax("#port_target_3", "#port_trigger_3");
    AddParalax("#port_target_4", "#port_trigger_4");
    AddParalax("#port_target_5", "#port_trigger_5");

    console.log("READY FUNC ENDED");
});

var AddParalax = function(targetElementID, triggerElementID){
    const controller = new ScrollMagic.Controller();
    var slideParalaxScene = new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: triggerElementID,
        triggerHook: 1
    }).setTween(TweenMax.from(targetElementID, 1,{
        y: '-60%',
        scale: 1.2,
        ease: Power0.easeNone
    }))
    .addTo(controller);
}

/*Scrolls to the given element's position*/
var ScrollToElement = function(targetElementID){
    var controller = new ScrollMagic.Controller();
    // change behaviour of controller to animate scroll instead of jump
	controller.scrollTo(function (newpos) {
		TweenMax.to(window, 4, {scrollTo: {y: newpos, ease:Power1.easeIn}});
	});
    controller.scrollTo(targetElementID);
}

/*Button animation*/
var IntroduceButton = function(){
    const tweenAnimIn = new TimelineMax();
    tweenAnimIn
    .to("#contact_button", 1, {
        x: 50,
        ease: Expo.easeOut
    })
    .to("#contact_button", 1, {
        x: 0,
        ease: Bounce.easeOut
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
            ease:Back.easeOut.config(2)
        },"-=1.7").eventCallback("onComplete", function(){
            /*Add the scroll animation untill the first animation is done*/
            AddDeskScrollAnimation();
            IntroduceButton();
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