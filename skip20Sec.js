var myPlayer, timeoutID, removeCTATime;
videojs.getPlayer('myPlayerID').ready(function() {
  myPlayer = this;
  var cuePointArray = [];
  myPlayer.on("loadstart", function(evt){
      console.log("load start");
      cuePointArray = myPlayer.mediainfo.cue_points;
      var tt = myPlayer.textTracks()[0];
      tt.oncuechange = function() {
          if (tt.activeCues[0] !== undefined) {
              console.log("cue point reached");
              skip20Sec(myPlayer);
          }
      };
  });

  function skip20Sec(player){
    var currentTime = player.currentTime();
    var setTime = currentTime + 20;
      player.currentTime(setTime);
  }
});
