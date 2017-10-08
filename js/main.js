var text = ["season two of Stranger Things",
            "I desire the ability to make the rest of my parents' lives a " +
                "happy and relaxing time for all they've done and all they're " +
                "doing for me and my siblings. I just want to come to a point where " +
                "I'm making enough so I can tell them that they can take a rest now " +
                "and we'll take care of everything. That is really all I desire. " +
                "When I say those words to them, then I'll know that I've really " +
                "made it.",
            "To my co-choreographer: I've wanted to kiss you since the day we met " +
                "(but your girlfriend makes you so happy, and that makes me happy too).",
            "i want to enjoy drinking. i like being drunk, in a casual and occasional " +
                "way, but after a drink or two i get sick of the physical act. i want " +
                "the bubbly feeling of drunkenness without choking down drinks with " +
                "liquor i always taste",
            "the freedom of not feeling like i have to fit an archetype",
            "Diet Coke and my ex boyfriend. Both are terrible for me.",
            "a sense of purpose",
            "the comfort of speaking my own language when I walk through the streets",
            "something glowing",
            "a small space in which to be held",
            "i wish i was able to spend time with my friends who live far away " +
                "instead of relying on the superficial snapchat-based relationship we " +
                "have 99% of the year",
            "a friendship that morphs naturally into a relationship. fuck dating",
            "having a bf (big frog)",
            "To be able to talk to people without my chest exploding!"];

var image = ["strangerthings.gif", "hug.gif", "dancers.gif", "wine.gif", "curtain.gif",
             "dietcoke.gif", "questionmark.gif", "text.gif", "pineapple.gif", "held.gif", "snapchat.gif", 
             "tinder.gif", "frog.gif", "fireworkperson.gif"];

var alt = ["stranger things logo", "person hugging parents", "two dancers in same pose",
           "wine glass and a few bubbles", "person peeking out from behind curtain", 
           "diet coke bottle", "person crawlings toward a question mark", 
           "2 text bubbles with text from foreign language", 
           "pineapples with glowing aura", "pair of hands holding person",
           "two snapchat logos connected by a string", "tinder logo in the trashcan", 
           "big frog", "person with firework explosion where their chest should be"];

var index = 0;
var total = image.length;

$(document).ready(function() {
    $(".text").html(text[0]);
    $(".gif").html("<img src=gifs/" + image[0] + " alt=" + alt[0] + "/>");
    $(".text").addClass("text-vertical");
    $(".gif").addClass("gif-vertical");

    if ($(window).width() < 500) {
        displayMobile();
    } 
});

$(window).resize(function() {
    if ($(window).width() < 500) {
        displayMobile();
    } else {
        displayReg();
    }
});


$("#rightArrow").click(function() {
    index += 1;
    var slide = index % total;
    console.log(slide);

    // Transition
    $(".container").hide();
    $(".text").html(text[slide]);
    $('.container').fadeIn( 700);
    
    $(".gif").html("<img src=gifs/" + image[slide ] + " alt=" + alt[slide] + "/>");

    // Formatting
    if (slide == 1 || slide == 2 || slide == 3 || 
        slide == 11 || slide == 13) {
        updateClassHorizontal();
    }
    else {
        updateClassVertical();
    }
});


$("#leftArrow").click(function() {
    if (index == 0) {
        index = total * 6;
    }
    index -= 1;
    var slide = index % total;
    console.log(slide);

    // Transition
    $(".container").hide();
    $(".text").html(text[slide]);
    $('.container').fadeIn( 700);

    $(".gif").html("<img src=gifs/" + image[slide ] + " alt=" + alt[slide] + "/>");

    // Formatting
    if (slide == 1 || slide == 2 || slide == 3 || 
        slide == 11 || slide == 13) {
        updateClassHorizontal();
    }
    else {
        updateClassVertical();
    }
});


var updateClassHorizontal = function() {
    $(".text").removeClass("text-vertical");
    $(".gif").removeClass("gif-vertical");
    $(".text").addClass("text-horizontal");
    $(".gif").addClass("gif-horizontal");


    var textHeight = $(".container").height() - $(".text").height();
    var gifHeight = $(".container").height() - $(".gif").height();

    $(".text").css("padding-top", textHeight / 2);
    $(".gif").css("padding-top", gifHeight / 2);

};

var updateClassVertical = function() {
    $(".text").removeClass("text-horizontal");
    $(".gif").removeClass("gif-horizontal");
    $(".text").addClass("text-vertical");
    $(".gif").addClass("gif-vertical");
    $(".text").css("padding-top", "8vh");
    $(".text").css("padding-bottom", "8vh");
    $(".gif").css("padding", "0");
}

var displayMobile = function() {
    $("#leftArrow").hide();
    $("#rightArrow").hide();
    var newContainer = "";

    for (var i = 0; i < total; i++) {
        newContainer += 
            "<div class='container container-mobile'>" +
                "<div class='text text-mobile'>" + text[i] + "</div>" + 
                "<div class='gif gif-mobile'>" + 
                "<img src=gifs/" + image[i] + 
                " alt=" + alt[i] + "/></div>" + 
            "</div>";
    }
    $("body").css("font-size", "12px");
    $("#content").html(newContainer); 
}

var displayReg = function() {
    $("#leftArrow").show();
    $("#rightArrow").show();

    var singlePage = 
        "<div class='container'>" +
            "<div class='text'>" + text[0]+ "</div>" +
            "<div class='gif'>" + "<img src=gifs/" + image[0] + 
                " alt=" + alt[0] + "/></div>" +
        "</div>";

    $("#content").html(singlePage); 

    $(".text").addClass("text-vertical");
    $(".gif").addClass("gif-vertical");
}
