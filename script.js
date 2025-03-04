// Countdown timer
const weddingDate = new Date("2025-07-27T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${minutes}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;
}

setInterval(updateCountdown, 1000);

// Smooth Scroll to Expanded Content
function scrollToNext() {
    document.getElementById("expanded-content").scrollIntoView({
        behavior: "smooth"
    });
}

// Fade-in Effect on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

console.log("Countdown and scroll effects initialized.");
