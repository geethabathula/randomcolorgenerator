function updateTimer() {
    const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    };

    const now = new Date();
    const formattedDate = Intl.DateTimeFormat('en-IN', options).format(now).replace(/,/g, '');
    document.getElementById('timer').textContent = formattedDate;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();
