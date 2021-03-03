//alert("hiii");
var initialSessionTime = 0;
var initialBreakTime = 0;

///id of both sessions//
var id;
var id2;
var clearId;
var isRunning = false;
var breaksection=false;
var sessionCalled = 1;
var mm = 0;
var ss = 0;
var stop = 0;


var mm2=0;
var ss2=0;
//initial time//

document.getElementsByClassName("time")[0].innerHTML = mm.toString().padStart(2, "0") + ":" + ss.toString().padStart(2, "0");

function incrementSessionTime() {
    if (initialSessionTime < 60) {
        initialSessionTime += 1; 
        mm+=1;
        if(breaksection==false)
            {
        document.getElementsByClassName("time")[0].innerHTML = mm.toString().padStart(2, "0") + ":" + ss.toString().padStart(2, "0");
            }
    
        document.getElementsByClassName("sessiontime")[0].innerHTML = initialSessionTime + " min";
    } else
        alert("Cannot go beyond 60 minutes!!");
}




function decrementSessionTime() {
    if (mm > 0) {
        initialSessionTime -= 1;
         mm-=1;
        if(breaksection==false)
            {
       document.getElementsByClassName("time")[0].innerHTML = mm.toString().padStart(2, "0") + ":" + ss.toString().padStart(2, "0");
            }
        document.getElementsByClassName("sessiontime")[0].innerHTML = initialSessionTime + " min";

    } else {
        alert("Cannot go below 0 minutes!!");
    }
}




function incrementBreakTime() {
    if (initialBreakTime < 60) {
        initialBreakTime += 1;
        mm2+=1;
        
        
           if(breaksection===true)
            {
    document.getElementsByClassName("time")[0].innerHTML = mm2.toString().padStart(2, "0") + ":" + ss2.toString().padStart(2, "0");
            }
     
        document.getElementsByClassName("breaktime")[0].innerHTML = initialBreakTime + " min";
    } else {
        alert("Cannot go beyond 60 minutes!!");
    }
}


function decrementBreakTime() {
    if (mm2 > 0) {
        initialBreakTime -= 1;
        mm2-=1;
        
        if(breaksection===true)
            {
     document.getElementsByClassName("time")[0].innerHTML = mm2.toString().padStart(2, "0") + ":" + ss2.toString().padStart(2, "0");
            }
        
        
       document.getElementsByClassName("breaktime")[0].innerHTML = initialBreakTime + " min";
    } else {
        alert("Cannot go below 0 minutes!!");
    }
}



function reset() {
    location.reload();
}

function sessionTime() {
    ///////logic///////
    
//    if(initialSessionTime==0)
//        return; 
       
    isRunning = true;

breaksection=false;
    id = setInterval(function () {

      
//        if (stop == initialSessionTime * 60 * 1000) {
//            clearInterval(id);
//        }
        
         if ((mm*60+ss)==0) {
            clearInterval(id);
             sessionCalled+=1;
             
            mm2=initialBreakTime;
            ss2=0;
             breakTime();
 
        }
        
        
        else{
            if((mm*60+ss)%60==0)
                {
                    mm-=1;
                    ss=59;
                }
            else
                {
                     ss-=1;
                }
              
        
//        else {
//            stop += 1000;
//            if ((stop % 60000) == 0) {
//                ss = (stop % 60000) / 1000;
//                mm += 1;
//            } else {
//                ss = (stop % 60000) / 1000;
//            }
            document.getElementById("start").style.display = "none";
            document.getElementById("pause").style.display = "inline-block";
            document.getElementsByClassName("increment_decrement")[0].disabled = true;
            document.getElementsByClassName("increment_decrement")[1].disabled = true;
            document.getElementsByClassName("increment_decrement")[2].disabled = true;
            document.getElementsByClassName("increment_decrement")[3].disabled = true;
             document.getElementsByClassName("time")[0].style.color="rgb(0, 143, 179)";
            document.getElementById("session_break_display").innerHTML = "Session " + sessionCalled;
            document.getElementsByClassName("time")[0].innerHTML = mm.toString().padStart(2, "0") + ":" + ss.toString().padStart(2, "0");
        }
    }, 1000);
    
  clearId=id;
        
}




function breakTime() 
{
//    if(initialBreakTime==0)
//        return; 
     isRunning = true;
    
   id2=setInterval(function()
   {
       breaksection=true;
       if((mm2*60+ss2)==0)
           {
               clearInterval(id2);
               mm=initialSessionTime;
               ss=0;
               sessionTime();
              
           }
       
        else {
            
            if((mm2*60+ss2)%60==0)
                {
                    mm2-=1;
                    ss2=59;
                }
            else
                {
                     ss2-=1;
                }  
            document.getElementById("start").style.display = "none";
            document.getElementById("pause").style.display = "inline-block";
            document.getElementsByClassName("increment_decrement")[0].disabled = true;
            document.getElementsByClassName("increment_decrement")[1].disabled = true;
            document.getElementsByClassName("increment_decrement")[2].disabled = true;
            document.getElementsByClassName("increment_decrement")[3].disabled = true;
            document.getElementById("session_break_display").innerHTML="Break!";
             document.getElementsByClassName("time")[0].style.color="rgb(255, 102, 0)";
            document.getElementsByClassName("time")[0].innerHTML = mm2.toString().padStart(2, "0") + ":" + ss2.toString().padStart(2, "0");
        }
   },1000)
   
    clearId=id2;
}

function pause() {
    document.getElementsByClassName("increment_decrement")[0].disabled = false;
    document.getElementsByClassName("increment_decrement")[1].disabled = false;
    document.getElementsByClassName("increment_decrement")[2].disabled = false;
    document.getElementsByClassName("increment_decrement")[3].disabled = false;
    if (isRunning) {
        isRunning = false;
        document.getElementById("pause_resume").innerHTML="Resume";
        clearInterval(clearId);
    } else {
//               alert();
        document.getElementById("pause_resume").innerHTML="Pause";
        if(clearId==id2)
            {
                breakTime();
            }
        else{
        sessionTime();
        }
    }

}
