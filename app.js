// Select elements by their IDs
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Get the current year
const currentYear = new Date().getFullYear();

// Set the target date and time for the New Year
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Update countdown time function
function updateCountdowntime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    // Calculate remaining time components
    const remainingDays = Math.floor(diff / 1000 / 60 / 60 / 24);
    const remainingHours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const remainingMinutes = Math.floor(diff / 1000 / 60) % 60;
    const remainingSeconds = Math.floor(diff / 1000) % 60;

    // Update the HTML content for each time component
    daysElement.innerHTML = remainingDays;
    hoursElement.innerHTML = remainingHours < 10 ? '0' + remainingHours : remainingHours;
    minutesElement.innerHTML = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
    secondsElement.innerHTML = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
}

// Call updateCountdowntime every second
setInterval(updateCountdowntime, 1000);