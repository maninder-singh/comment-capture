"use strict"

$("#comment_mode_id").click(function(){
    var body = $("body").html();
    $("#comment_mode_data_insertion_id").empty();
    $("#comment_mode_data_insertion_id").append(body.toString());
    console.log("comment mode gets clicked....");
});

$("#context_menu_click_event").click(function (event){
   console.log("click on comment modal box");
});

$("#buttons").click(function(event){
    console.log("button clicked...")
});