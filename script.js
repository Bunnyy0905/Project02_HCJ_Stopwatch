/*Creating Variables*/
var hr=0;
var min=0;
var sec=0;
var count=0; //1count = 100 part of 1sec

var timer = false;  //Denotes timer is stopped

function start(){
    timer=true; //Denotes that timer has started
    stopwatch();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00 ";
}

function stopwatch(){
    if(timer==true){
        count = count+1; //Count will get incrementeed by 1 after every setinterval i.e after every 10ms

        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }

        /*Creating Variables which will store string values of hr, min, sec and count*/
        var hrstring=hr;
        var minstring=min;
        var secstring=sec;
        var countstring=count;
        /*Converting it to string*/
        if(hr<10)   //i.e. for single digit
        {
            hrstring="0"+hrstring; //string + string = string
        }
        if(min<10){
            minstring="0"+minstring;
        }
        if(sec<10){
            secstring="0"+secstring;
        }
        if(count<10){
            countstring="0"+countstring;
        }
        /*Changing the inner HTML*/
        document.getElementById("hr").innerHTML=hrstring;   
        document.getElementById("min").innerHTML=minstring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("count").innerHTML=countstring;
        setTimeout("stopwatch()",10);   //it will wait till 10ms. As time interval given = 10
        /*1ms= 1000 part of 1sec and 1count = 100 part of 1sec, therefore, we have to wait 10ms*/ 
    }
}