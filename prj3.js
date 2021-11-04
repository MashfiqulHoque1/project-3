function show(){
    var name = document.getElementById("namebox").value ;
    var day = document.getElementById("timebox").value ;
    var ap = document.getElementById("apbox").value ;

    var am = "am";
    var am1 = "AM";

    var pm = "pm";
    var pm1 = "PM";

    var x = "Please fill up your form.";


    if (day == '')
        {
            document.getElementById("i1").innerHTML = x;
        }

    else if (4>=day && ((am==am)||(am1==am1))) {
        document.getElementById("i1").innerHTML = "Good night, " + name + ".";
    }

    else if (12>=day && ((am==am)||(am1==am1))){
        document.getElementById("i1").innerHTML = "Good morning " + name + ".";
    }

    else if (18>=day && ((pm==pm)||(pm1==pm1))) {
        document.getElementById("i1").innerHTML = "Good Afternoon " + name + ".";
    }

    else if(24>=day && ((pm==pm)||(pm1==pm1))){
        document.getElementById("i1").innerHTML = "Good evening " + name + ".";
    }

    /*document.getElementById("namebox").innerHTML = '';
    document.getElementById("timebox").innerHTML = '';
    document.getElementById("apbox").innerHTML = '';*/

}