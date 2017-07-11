var streamer = {name: "", game: "", status: ""};
// var channels = ["blizzheroes","lost_in_house","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// var channels = ["followgrubby", "anderzel", "freecodecamp","brunofin"];
var channels = ["anderzel", "freecodecamp"];
var i;
// var channels = ["brunofin"];

getChannelInfo();

function getChannelInfo() {

  for (i = 0; i < channels.length; i++) {

    axios.get(makeURL("streams", channels[i]))
      .then(function (response) {
        var game, status, name;
        if (response.data.stream === null) {
          game = "Offline";
          status = "offline";
        } else if (response.data.stream === undefined) {
          game = "Account Closed";
          status = "offline";
        } else {
          if (response.data.stream.game === null) {
            game = "no game chosen";
          } else {
            game = response.data.stream.game + ":";
          }
          status = "online";
        }

console.log("channels[i]", channels[i]);

        // name = channels[i];

        if (status === "online") {
          // Name
          name = response.data.stream.channel.display_name;

        }




        streamer = {
          name: name,
          game: game,
          status: status
        };

        // console.log("name ", streamer.name);
        // console.log("game ", streamer.game);

      })
      .catch(function (error) {
        console.log(error);
      });



      axios.get(makeURL("channels", channels[i]))
        .then(function (response) {

          var name;
            // Logo
            if (response.data.logo !== null) {
              logo = response.data.logo;

            } else {
              logo =  "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
            }

            // Name
            if (response.data.display_name !== null) {
               name = response.data.display_name;
            } else {
              name = channels[i];
            }

            // Description
            if(status === "online") {
              description = response.data.status;
            } else {
              description = "";
            }

            // url
            url = response.data.url;





          streamer = {
            name: name
          };

          // console.log("name ", streamer.name);
          // console.log("game ", streamer.game);
        })
        .catch(function (error) {
          console.log(error);
        });


        // console.log("name ", streamer.name);
        // console.log("game ", streamer.game);
  } // end for loop
} // end function
