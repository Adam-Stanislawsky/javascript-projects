// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let takeOffButton = document.getElementById("takeoff")
    takeOffButton.addEventListener("click", function(event){
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (answer) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in Flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue"
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }

        let landButton = document.getElementById("landing");
        landButton.addEventListener("click", function(event){
            window.alert("The shuttle is landing, landing gear engaged.");
            document.getElementById("flightStatus").innerHTML = "Shuttle has landed";
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        })

        let abortButton = document.getElementById("missionAbort");
        abortButton.addEventListener("click", function(event){
            let answer = window.confirm("Confirm that you want to abort the mission")
            if (answer){
                document.getElementById("flightStatus").innerHTML = "Mission Aborted";
                document.getElementById("shuttleBackground").style.backgroundColor = 'green'
                document.getElementById("spaceShuttleHeight").innerHTML = 0;
            }
        })
    });

});