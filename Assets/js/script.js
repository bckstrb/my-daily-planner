var today = moment();
$("#currentDay").text(today.format("MMM D, YYYY, h:mm"));

var timeStamp = $(".time-block");
var currentTime = moment().hour();
//console.log(currentTime)

timeStamp.each(function(){
    var timeblockHour = $(this).attr("id");
    //console.log(timeblockHour)
    if (currentTime > timeblockHour) {
        //console.log("past")
        $(this).children("textarea").addClass("past");
    }else if (currentTime < timeblockHour){
        //console.log("future")
        $(this).children("textarea").addClass("future");
    }else {
        //console.log("current")
        $(this).children("textarea").addClass("present");
    }
});

var saveBtn = $(".saveBtn");

saveBtn.on("click", function(){
    //console.log("click")
    var textAreaContent = $(this).siblings("textarea").val();
    //console.log(textAreaContent)
    var timeblockHour = $(this).parent().attr("id");
    console.log(timeblockHour)
    localStorage.setItem(timeblockHour, textAreaContent);
})



//set color code for past, present, future
//--function with if statements to indicate time
//-- is the moment.js needed to base the time within the function 


//log it to local storage so that it will remain after refreshed
//--need an event listener for each row of a column-for loop?