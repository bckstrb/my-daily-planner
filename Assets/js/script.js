var today = moment();
$("#currentDay").text(today.format("MMM D, YYYY, h:mm"));

var timeStamp = $(".time-block");
var currentTime = moment().hour();
//console.log(currentTime)

//this will determine past, present, future
timeStamp.each(function () {
  var timeblockHour = $(this).attr("id");
  //console.log(timeblockHour)
  if (currentTime > timeblockHour) {
    //console.log("past")
    $(this).children("textarea").addClass("past");
  } else if (currentTime < timeblockHour) {
    //console.log("future")
    $(this).children("textarea").addClass("future");
  } else {
    //console.log("current")
    $(this).children("textarea").addClass("present");
  }

  //this will retreive from local storage
  var hourlyContent = localStorage.getItem(timeblockHour);
  //console.log(hourlyContent);
  $(this).children("textarea").val(hourlyContent);
});

var saveBtn = $(".saveBtn");

//this will save to local storage
saveBtn.on("click", function () {
  //console.log("click")
  var textAreaContent = $(this).siblings("textarea").val();
  //console.log(textAreaContent)
  var timeblockHour = $(this).parent().attr("id");
  //console.log(timeblockHour)
  localStorage.setItem(timeblockHour, textAreaContent);
});
