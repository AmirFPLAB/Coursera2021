(function(window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speak = function(Firstname) {
        console.log(speakWord + " " + Firstname);
    };
    window.byeSpeaker = byeSpeaker;
})(window);