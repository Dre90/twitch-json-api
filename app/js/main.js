$(function() {
var streamer = {name: "", game: "", status: ""};
// var channels = ["blizzheroes","lost_in_house","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// var channels = ["followgrubby", "anderzel", "freecodecamp","brunofin"];
var channels = ["monstercat", "freecodecamp"];
var i;
// var channels = ["brunofin"];

getChannelInfo();

function getStreams() {
    var result="";
    $.ajax({
      url: makeURL("streams", channels[i]),
      async: false,
      success:function(data) {
         result = data;
      }
   });
   return result;
}

function getChannels() {
    var result="";
    $.ajax({
      url: makeURL("channels", channels[i]),
      async: false,
      success:function(data) {
         result = data;
      }
   });
   return result;
}

function getChannelInfo() {
  var streamers = [];
  for (i = 0; i < channels.length; i++) {

    Streams = getStreams();
    Channels = getChannels();

    var game, status, name;
    if (Streams.stream === null) {
      game = "Offline";
      status = "offline";
    } else if (Streams.stream === undefined) {
      game = "Account Closed";
      status = "offline";
    } else {
      if (Streams.stream.game === null) {
        game = "no game chosen";
      } else {
        game = Streams.stream.game + ":";
      }
      status = "online";
    }

    // Logo
    if (Channels.logo !== null) {
      logo = Channels.logo;

    } else {
      logo =  "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
    }

    // Name
    if (Channels.display_name !== null) {
       name = Channels.display_name;
    } else {
      name = channels[i];
    }

    // Description
    if(status === "online") {
      description = Channels.status;
    } else {
      description = "";
    }

    // url
    url = Channels.url;

    streamer = {
          name: name,
          game: game,
          status: status,
          logo: logo,
          description: description,
          url: url
        };

    streamers.push(streamer);
  } // end for loop
  // console.log("name ", streamers);

  // Grab the template script
var theTemplateScript = $("#example-template").html();

// Compile the template
var theTemplate = Handlebars.compile(theTemplateScript);

var content = {};

content += streamers;

// Pass our data to the template
  var theCompiledHtml = theTemplate(content);
  console.log(content);

  // Add the compiled html to the page
  $('.content-wrapper').html(theCompiledHtml);
} // end function
});
