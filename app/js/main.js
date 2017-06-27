var channels = ["blizzheroes","lost_in_house","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

(function() {
getChannelInfo();

})();




function getChannelInfo() {
  var i, game, status, logo, name, description, url;

  for (i = 0; i < channels.length; i++) {

    getJSON(makeURL("streams", channels[i]), function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {

        if (data.stream === null) {
          game = "Offline";
          status = "offline";
        } else if (data.stream === undefined) {
          game = "Account Closed";
          status = "offline";
        } else {
          if (data.stream.game === null) {
            game = "no game chosen";
          } else {
            game = data.stream.game + ":";
          }
          status = "online";
        }
      }
    });//end getJSON function
    getJSON(makeURL("channels", channels[i]), function(err, data) {

      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {

        // Logo
        if (data.logo !== null) {
          logo = data.logo;

        } else {
          logo =  "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
        }

        // Name
        if (data.display_name !== null) {
           name = data.display_name;
        } else {
          name = channels[i];
        }

        // Description
        if(status === "online") {
          description = data.status;
        } else {
          description = "";
        }

        // url
        url = data.url;
      }


      document.getElementById("content-wrapper").innerHTML += '<div><a href="' + url +'" target="_blank">'+ name +' </a> <div><p>' + game + ' ' + description + '</p></div></div> ';

    }); //end getJSON function

  } // end for loop
} // end function
