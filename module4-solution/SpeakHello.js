(function(window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function(Firstname) {
        console.log(speakWord + " " + Firstname);
    };
    window.helloSpeaker = helloSpeaker;
})(window);