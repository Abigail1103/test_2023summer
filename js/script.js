$(document).ready(function () {
    <!-- load JSON -->
    let openingAnimWindow = document.querySelector("#mainspring")
    let openingAnimData = {

        container: openingAnimWindow,
        animType:'svg',
        loop:false,
        prerender:true,
        autoplay: false,
        path: 'json/data.json'

    };
    //set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

    $('#lottie-start').click(function (){
        openingAnim.play();
    });
    
    $('#lottie-pause').click(function (){
        openingAnim.pause();
    });
    
    $('#lottie-stop').click(function (){
        openingAnim.stop();
    });
});

$(document).ready(function () {
    <!-- load JSON -->
    let openingAnimWindow = document.querySelector("#mainsummer")
    let openingAnimData = {

        container: openingAnimWindow,
        animType:'svg',
        loop:false,
        prerender:true,
        autoplay: false,
        path: 'json/data.json'

    };
    //set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

    $('#lottie-start').click(function (){
        openingAnim.play();
    });
    
    $('#lottie-pause').click(function (){
        openingAnim.pause();
    });
    
    $('#lottie-stop').click(function (){
        openingAnim.stop();
    });
});
