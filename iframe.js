document.addEventListener("DOMContentLoaded", function () {
        var node = document.getElementById("stream");
 
        var channels = ["channel1", "channel2", "channel3"];
        var request = new XMLHttpRequest();
        request.addEventListener("load", function (e) {
                var data = JSON.parse(request.responseText);
                var live = data.streams.map(function (stream) {return stream.channel.name});
       
                var random, iframe;
                if (live.length > 0) {
                        random = live[Math.floor(Math.random() * live.length)];
 
                        var iframe = document.createElement("iframe");
                        iframe.src = "http://www.twitch.tv/" + random + "/embed";
                        node.appendChild(iframe);
                        node.removeAttribute("hidden");
                }
        });
 
        request.open("GET", "https://api.twitch.tv/kraken/streams?channel=" + channels.join(","));
        request.send();
});