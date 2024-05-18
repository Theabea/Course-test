// script.js

/* TIMER */

var timerInterval;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function startTimer() {
    timerInterval = setInterval(function() {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        document.getElementById('timer').innerText = formatTime(hours, minutes, seconds, milliseconds);
    }, 10); // Update every 10 milliseconds for millisecond accuracy
    
    // Show only the stop button
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline-block';
}

function stopTimer() {
    clearInterval(timerInterval);
    
    // Show only the start button
    document.getElementById('startButton').style.display = 'inline-block';
    document.getElementById('stopButton').style.display = 'none';
}

function formatTime(hours, minutes, seconds, milliseconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, true)}`;
}

function pad(number, isMilliseconds = false) {
    if (isMilliseconds) {
        return number < 10 ? '00' + number : number < 100 ? '0' + number : number;
    }
    return number < 10 ? '0' + number : number;
}



/* START BUTTON */
function toggleButton() {
    var button = document.getElementById('toggleButton');
    if (button.classList.contains('start')) {
        button.classList.remove('start');
        button.classList.add('stop');
        button.innerHTML = 'Stop';
    } else {
        button.classList.remove('stop');
        button.classList.add('start');
        button.innerHTML = 'Start';
    }
}

// MISSION
// Function to change the selected mission
function changeMission(selectedMission) {
    document.getElementById('missionButton').innerText = selectedMission;
    modal.style.display = "none"; // Hide the modal after selecting a mission
}

// Get the modal
var modal = document.getElementById("myModal");

// Function to display the modal when the page loads
window.onload = function() {
    modal.style.display = "block";
}

// Function to close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//VIDEOS
function displayVideo(videoSrc) {
    var middleVideo = document.getElementById('middleVideo');
    middleVideo.src = videoSrc; // Set the src of middle video to the clicked video src
    middleVideo.play(); // Play the middle video
}









