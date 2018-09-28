$(document).ready(function(){

  $("#menu1").click(function(){
	$("#menu1").css({"padding-bottom":"2px", "border-bottom":"1px solid white"});
	$("#menu2").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu3").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu4").css({"padding-bottom":"0px", "border-bottom":"none"});

	$("#text-menu1").css({"display": "block"});
	$("#text-menu2").css({"display": "none"});
	$("#text-menu3").css({"display": "none"});
	$("#text-menu4").css({"display": "none"});
  });

  $("#menu2").click(function(){
	$("#menu1").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu2").css({"padding-bottom":"2px", "border-bottom":"1px solid white"});
	$("#menu3").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu4").css({"padding-bottom":"0px", "border-bottom":"none"});

	$("#text-menu1").css({"display": "none"});
	$("#text-menu2").css({"display": "block"});
	$("#text-menu3").css({"display": "none"});
	$("#text-menu4").css({"display": "none"});
  });

  $("#menu3").click(function(){
	$("#menu1").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu2").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu3").css({"padding-bottom":"2px", "border-bottom":"1px solid white"});
	$("#menu4").css({"padding-bottom":"0px", "border-bottom":"none"});

	$("#text-menu1").css({"display": "none"});
	$("#text-menu2").css({"display": "none"});
	$("#text-menu3").css({"display": "block"});
	$("#text-menu4").css({"display": "none"});
  });

  $("#menu4").click(function(){
	$("#menu1").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu2").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu3").css({"padding-bottom":"0px", "border-bottom":"none"});
	$("#menu4").css({"padding-bottom":"2px", "border-bottom":"1px solid white"});

	$("#text-menu1").css({"display": "none"});
	$("#text-menu2").css({"display": "none"});
	$("#text-menu3").css({"display": "none"});
	$("#text-menu4").css({"display": "block"});
  });

});
