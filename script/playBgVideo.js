
//视频加载完成
function loadComplete(){
  canPlay = true;
}
//是否是pc
function isPc(){
  var userAgentInfo = navigator.userAgent;
  var agents = new Array("Android", "iPhone", "Windows Phone", "iPad", "iPod");
  for(var i=0; i < agents.length;i++){
    if(userAgentInfo.indexOf(agents[i]) > 0){
      return false
    }
  }
  return true;
}
//播放视频
function playVideo(){
  if (canPlay) {
    $("video").css("display", "block");
    $("#bg").fadeOut(500);
    text = $("#text");
    $("#play").fadeOut(500);
    $("#text").fadeOut(500);
    document.getElementById('video').play();
    timing = setInterval(showNext,15000);
    isStart = true;
    isVideoStop();
  }
}
//判断视频播放完
function isVideoStop(){
  var video=document.getElementById("video");
  video.addEventListener("ended",function(){
      $('video').hide();
      $("#bg").fadeIn(500);
  });
}
//显示下一行字
function showNext(){
  text.text(content[i]);
  text.fadeIn(1000);
  i++;
  if(i >= content.length){
    clearInterval(timing);
    $("#content").fadeIn(500);
    text.animate({fontSize:'105px', fontWeight:'900'}, 1000);
    return;
  }
  text.delay(5000).fadeOut(1000);
}
