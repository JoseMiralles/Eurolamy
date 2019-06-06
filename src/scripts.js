$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var tweenAnimIn = new TimelineMax();
    var tweenAnimIn2 = new TimelineMax();
    const triggerElement ='#table_animation_trigger';
    var itemName = "";
    for (i = 1; i <= 11; i++) {
        itemName = "#OD" + i;
        tweenAnimIn.from(itemName, 0.3, {
            y:-200,
            autoAlpha: 0,
            ease:Expo.easeOut
        });
        itemName = "#OD" + (i + 1);
        tweenAnimIn2.from(itemName, 0.5, {
            y:-200,
            autoAlpha: 0,
            ease:Expo.easeOut
        });
        i++
    }

    console.log("READY FUNC ENDED");
});