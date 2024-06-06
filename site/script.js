// script.js

/* TIMER */

// Variables to keep track of timer intervals and time units
var timerInterval;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var mission = ''; // To store the current mission name
var savedTimes =[]; // Array to save times for different missions

function counter() {
    milliseconds++;
    // If milliseconds reach 100, increment seconds and reset milliseconds
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    // If seconds reach 60, increment minutes and reset seconds
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    // Display the formatted time
    document.getElementById('timer').innerText = formatTime(minutes, seconds, milliseconds);
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(counter, 10);
    
    // Hide the start button and show the stop button
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline-block';
}

// Function to stop the timer
function stopTimer() {
    // Clear the interval to stop the timer
    clearInterval(timerInterval);

    // Save the current time for the selected mission
    saveCurrentTime();

    // Reset the timer variables
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('timer').innerText = formatTime(minutes, seconds, milliseconds);
    
    // Hide the stop button and show the start button
    document.getElementById('startButton').style.display = 'inline-block';
    document.getElementById('stopButton').style.display = 'none';
}

// Function to save the current time for the selected mission
function saveCurrentTime() {
    var currentTime = formatTime(minutes, seconds, milliseconds);
    if (mission !== '') {
        savedTimes.push({ mission: mission, time: currentTime });

        var newEntry = ' ' + mission + ': ' + currentTime + '<br>';

        document.getElementById('savedTimesContainer').innerHTML += newEntry;

        console.log('Saved Times:', savedTimes);
    }
}


// Function to format the time display
function formatTime(minutes, seconds, milliseconds) {
    return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, true)}`;
}

// Function to pad single-digit numbers with leading zeros
function pad(number, isMilliseconds = false) {
    if (isMilliseconds) {
        return number < 10 ? '00' + number : number < 100 ? '0' + number : number;
    }
    return number < 10 ? '0' + number : number;
}

/* START BUTTON */
// Function to toggle the start/stop button state
// function toggleButton() {
//     var button = document.getElementById('toggleButton');
//     if (button.classList.contains('start')) {
//         button.classList.remove('start');
//         button.classList.add('stop');
//         button.innerHTML = 'Stop';
//     } else {
//         button.classList.remove('stop');
//         button.classList.add('start');
//         button.innerHTML = 'Start';
//     }
// }

// MISSION
// Function to change the selected mission
function changeMission(selectedMission) {
    mission = selectedMission;
    document.getElementById('missionButton').innerText = selectedMission;
    modal.style.display = "none"; // Hide the modal after selecting a mission
}

// Get the modal element
var modal = document.getElementById("myModal");

// Function to display the modal when the page loads
window.onload = function() {
    modal.style.display = "block";
}

//VIDEOS
// Function to display a selected video in the main video player
function displayVideo(videoSrc) {
    var middleVideo = document.getElementById('middleVideo');
    middleVideo.src = videoSrc; // Set the src of middle video to the clicked video src
    middleVideo.play(); // Play the middle video
}












