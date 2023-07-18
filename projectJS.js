
//event listener for submititon 
document.getElementById('weeklyPlan').addEventListener("submit", function(event){
    let userEmail = document.getElementById("userEmail").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // check for valid email 
    if (!emailRegex.test(userEmail)){
        event.preventDefault();
        window.alert("This is not a valid email");
    }else{
        // call for flywindow
        myWindow();
    }

});


// create funtion for the flyWindow
function myWindow(){
    // open new window
    flywindow = window.open('about:blank','myPop','width=600,height=400,left=400,top=400');
    
    //create btn for printing in the new window
    let printBtn = flywindow.document.createElement("button");
    printBtn.textContent = "Click To Print Plan";
    printBtn.addEventListener("click",function() {
        flywindow.print();
    });
    
    //user Personal info
    userName = document.getElementById("userName").value;
    userGoal = document.getElementById('userGoal').value;

    //greating : perosnal info display
    finalPlan = ("<!DOCTYPE html><html>\n<head>\n<title>Final Meal Plan</title>\n</head>\n<body>\n");
    finalPlan += ("Hello " + userName + ", This is your goal for this week! " + userGoal);
    finalPlan += ("<table>\n<thead>\n<tr>\n");
    finalPlan += ('<th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr>\n</thead><tbody>');
    

    // Row 1 : Breakfast Grab
    monBreakfast = document.getElementById("monBreakfast").value;
    tueBreakfast = document.getElementById("tueBreakfast").value;
    wedBreakfast = document.getElementById("wedBreakfast").value;
    thurBreakfast = document.getElementById("thurBreakfast").value;
    friBreakfast = document.getElementById("friBreakfast").value;
    satBreakfast =  document.getElementById("satBreakfast").value;
    sunBreakfast = document.getElementById("sunBreakfast").value;
    // Row 1 : display breakfast
    finalPlan += ('<tr>\n<td> '+ monBreakfast +' </td><td> '+tueBreakfast +' </td><td> '+wedBreakfast+' </td><td> '+thurBreakfast+' </td><td> '+friBreakfast+' </td><td> '+satBreakfast+' </td><td> '+sunBreakfast+' </td></tr>\n');


    //row 2 : Snack Grab
    monSnack1 = document.getElementById("monSnack1").value;
    tueSnack1 = document.getElementById("tueSnack1").value;
    wedSnack1 = document.getElementById("wedSnack1").value;
    thurSnack1 = document.getElementById("thurSnack1").value;
    friSnack1 = document.getElementById("friSnack1").value;
    satSnack1 = document.getElementById("satSnack1").value;
    sunSnack1 = document.getElementById("sunSnack1").value;
    // row 2 : display snack1
    finalPlan += ('<tr>\n<td> '+ monSnack1 +' </td><td> '+tueSnack1 +' </td><td> '+wedSnack1+' </td><td> '+thurSnack1+' </td><td> '+friSnack1+' </td><td> '+satSnack1+' </td><td> '+sunSnack1+' </td></tr>\n');


    //row 3 : Lunch Grab 
    monLunch = document.getElementById("monLunch").value;
    tueLunch = document.getElementById("tueLunch").value;
    wedLunch = document.getElementById("wedLunch").value;
    thurLunch = document.getElementById("thurLunch").value;
    friLunch = document.getElementById("friLunch").value;
    satLunch = document.getElementById("satLunch").value;
    sunLunch = document.getElementById("sunLunch").value;
    //row 3 : display lunch
    finalPlan += ('<tr>\n<td> '+ monLunch +' </td><td> '+tueLunch +' </td><td> '+wedLunch+' </td><td> '+thurLunch+' </td><td> '+friLunch+' </td><td> '+satLunch+' </td><td> '+sunLunch+' </td></tr>\n');


    //row 4 : snack 2 
    monSnack2 = document.getElementById("monSnack2").value;
    tueSnack2 = document.getElementById("tueSnack2").value;
    wedSnack2 = document.getElementById("wedSnack2").value;
    thurSnack2 = document.getElementById("thurSnack2").value;
    friSnack2 = document.getElementById("friSnack2").value;
    satSnack2 = document.getElementById("satSnack2").value;
    sunSnack2 = document.getElementById("sunSnack2").value;
    //row 4 : display snack2
    finalPlan += ('<tr>\n<td> '+ monSnack2 +' </td><td> '+tueSnack2 +' </td><td> '+wedSnack2+' </td><td> '+thurSnack2+' </td><td> '+friSnack2+' </td><td> '+satSnack2+' </td><td> '+sunSnack2+' </td></tr>\n');


    //row 5 : dinner
    monDinner = document.getElementById("monDinner").value;
    tueDinner = document.getElementById("tueDinner").value;
    wedDinner = document.getElementById("wedDinner").value;
    thurDinner = document.getElementById("thurDinner").value;
    friDinner = document.getElementById("friDinner").value;
    satDinner = document.getElementById("satDinner").value;
    sunDinner = document.getElementById("sunDinner").value;
    //row 5 : display dinner
    finalPlan += ('<tr>\n<td> '+ monDinner +' </td><td> '+tueDinner +' </td><td> '+wedDinner+' </td><td> '+thurDinner+' </td><td> '+friDinner+' </td><td> '+satDinner+' </td><td> '+sunDinner+' </td></tr>\n');

    // end of html
    finalPlan += ("</tbody>\n</table></body>\n</html>");   
    // functionality of new window 
    flywindow.document.write(finalPlan);
    flywindow.document.body.appendChild(printBtn);
    flywindow.document.close();
    
    

};   


