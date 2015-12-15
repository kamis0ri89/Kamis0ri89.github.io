document.addEventListener("DOMContentLoaded", function () {

					var node = document.getElementById("stream");
 
						var channels = ["Anniebot", "Braxas19", "Crizzy1994", "DreamKazper", "Jakehounds13", "Jannso", "Kamis0ri89", "Mom92", "Painlessdeath22", "Raynaud05", "RemarkableMe", "Souvie", "vortexware"];
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
							iframe.width = "1080";
							iframe.height = "520";
						
						}
						});
 
						request.open("GET", "https://api.twitch.tv/kraken/streams?channel=" + channels.join(","));
						request.send();
						});