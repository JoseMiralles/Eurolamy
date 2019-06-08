$(document).ready(function () {
    /*Show the intial animation and then
    activated the scrill animation to
    avoid timeline issues.*/
    ShowDeskAnimation();

    /*TODO: loop this*/
    AddParalax("#port_target_1", "#port_trigger_1", "#prot_shroud_1");
    AddParalax("#port_target_2", "#port_trigger_2");
    AddParalax("#port_target_3", "#port_trigger_3");
    AddParalax("#port_target_4", "#port_trigger_4");
    AddParalax("#port_target_5", "#port_trigger_5");

    CreatFadeInScrollAnimation("#Whatsapp_card", "#Contact_card_trigger", 200, 400);
    CreatFadeInScrollAnimation("#facebook_card", "#Contact_card_trigger", 200, 200);

    console.log("READY FUNC ENDED");

});

var AddParalax = function (targetElementID, triggerElementID, shroudElementID) {
    const controller = new ScrollMagic.Controller();

    var parallaxTl = new TimelineMax();
    if (shroudElementID != null){
        parallaxTl
            .to(shroudElementID, 1, {
                y: -100,
                opacity: 0,
                ease: Power0.easeOut
            }, 2);
    }
    parallaxTl.from(targetElementID, 4, {
        y: '-20%',
        scale: 2,
        ease: Power0.easeNone
    }, 0);

    var slideParalaxScene = new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: triggerElementID,
        triggerHook: 1
    }).setTween(parallaxTl).addTo(controller);
}

/*Scrolls to the given element's position*/
var ScrollToElement = function (targetElementID) {
    var controller = new ScrollMagic.Controller();
    // change behaviour of controller to animate scroll instead of jump
    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 5, { scrollTo: { y: newpos, ease: Power1.easeIn } });
    });
    controller.scrollTo(targetElementID);
}

/*Bounces the given item to the specified x position and back*/
var BounceItemX = function (targetID, xpos) {
    const tweenAnimIn = new TimelineMax();
    tweenAnimIn
        .to(targetID, 1, {
            x: xpos,
            ease: Expo.easeOut
        })
        .to(targetID, 1, {
            x: 0,
            ease: Bounce.easeOut
        });
        return tweenAnimIn;
};
/*Bounces the given item to the specified y position and back*/
var BounceItemY = function(targetID, ypos, delay){
    const tweenAnimIn = new TimelineMax();
    tweenAnimIn
    .to(targetID, 1,{
        y: ypos,
        ease: Expo.easeOut
    },"+="+delay)
    .to(targetID, 1, {
        y: 0,
        ease: Bounce.easeOut
    });
    return tweenAnimIn;
}
/*Fades in item from the given y position*/
var CreatFadeInScrollAnimation = function(targetElementID, triggerElementID, ypos, duration){
    var parallaxTl = new TimelineMax();
    parallaxTl.from(targetElementID, 3,{
        y: ypos,
        autoAlpha: 0
    },);

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: triggerElementID,
        duration: duration})
        .setTween(parallaxTl).addTo(controller);
}

/*HERO ANIMATIONS*/
///Shows the office desk animation immediately.
var ShowDeskAnimation = function () {
    const tweenAnimIn = new TimelineMax();
    //const tweenAnimIn2 = new TimelineMax();
    //const tweenAnimIn3 = new TimelineMax();
    var itemName = "";
    const xpos = -100, ypos = 70;
    for (i = 1; i <= 11; i++) {
        itemName = "#OD" + i;
        tweenAnimIn.from(itemName, 2, {
            x: xpos,
            y: ypos,
            autoAlpha: 0,
            ease: Back.easeOut.config(2)
        }, "-=1.7").eventCallback("onComplete", function () {
            /*Add the scroll animation untill the first animation is done*/
            AddDeskScrollAnimation();
            BounceItemX("#contact_button", 50);
            BounceItemY("#previous_projects_text", 50, 0.5);
        });
    }
};
///Adds the scroll animation for the desk svg.
var AddDeskScrollAnimation = function () {
    const triggerElement = '#table_animation_trigger';
    const controller = new ScrollMagic.Controller();

    for (i = 1; i <= 11; i++) {
        new ScrollMagic.Scene({ triggerElement: triggerElement, duration: 800 })
            .setTween("#OD" + i, { y: (0 - (i * 80)), autoAlpha: 0 })
            .addTo(controller);
    }
};