var channels = ["blizzheroes","lost_in_house","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

(function() {
var test = getChannelInfo();

console.log(test);
})();




function getChannelInfo() {
  var i, game, status;
  var allChannels = [];
  var channel = {};
  var context = {};



  // var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
  //
  // var obj = JSON.parse(jsonStr);
  // obj['theTeam'].push({"teamId":"4","status":"pending"});
  // jsonStr = JSON.stringify(obj);

  for (i = 0; i < channels.length; i++) {
    getJSON(makeURL("streams", channels[i]), function(err, data) {
      context = data;
      // var x = i
      // if (err !== null) {
      //   alert('Something went wrong: ' + err);
      // } else {
      //
      //
      //   if (data.stream === null) {
      //     channel.game = "Offline";
      //     channel.status = "offline";
      //   } else if (data.stream === undefined) {
      //     channel.game = "Account Closed";
      //     channel.status = "offline";
      //   } else {
      //     if (data.stream.game === null) {
      //
      //       channel.game = "no game chosen";
      //     } else {
      //       channel.game = data.stream.game + ":";
      //     }
      //     channel.status = "online";
      //   }
      // }
    });




    getJSON(makeURL("channels", channels[i]), function(err, data) {
      context += data;
      // if (err !== null) {
      //   alert('Something went wrong: ' + err);
      // } else {
      //   // Logo
      //   if (data.logo !== null) {
      //     channel.logo = data.logo;
      //     // context['channel'].push({"logo":data.logo});
      //   } else {
      //     // context.logo =  "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
      //     // context['channel'].push({"logo":"https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F"});
      //   }
      //
      //   // Name
      //   if (data.display_name !== null) {
      //      channel.name = data.display_name;
      //     // channel.name = data.display_name;
      //     // console.log(channel.name);
      //     // context['channel'].push({"name":data.display_name});
      //   } else {
      //     channel.name = channels[i];
      //   }
      //
      //   // Description
      //   if(channel.status === "online") {
      //     channel.description = data.status;
      //   } else {
      //     channel.description = "";
      //   }
      //
      //   // url
      //   channel.url = data.url;
      //
      //
      //   allChannels.push(channel);
      //   // console.log(allChannels[0].game);
      //   channel = {};
      //   // console.log(channel, 'channel');
      //
      //   // // Grab the template script
      //   var theTemplateScript = document.getElementById("display").innerHTML;
      //   //
      //   // // Compile the template
      //   var theTemplate = Handlebars.compile(theTemplateScript);
      //   //
      //   // // Pass our data to the template
      //   var theCompiledHtml = theTemplate(context);
      //   //
      //   // // Add the compiled html to the page
      //   document.getElementById("content-wrapper").innerHTML = theCompiledHtml;
      //


      // }
    });

  }
  console.log(context);
  // context.channels = allChannels;
  //     return context;
  // console.log(context);

}
