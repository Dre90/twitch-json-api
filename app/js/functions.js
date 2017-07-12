var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

function makeURL(type, name) {
  var client_id = '?client_id=aw1wv65cdiorm1pngkc3ujxk9uhyck';

  return 'https://api.twitch.tv/kraken/' + type + '/' + name + client_id;
}


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
