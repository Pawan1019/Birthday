// Enhanced particle creation functions
function createEnhancedStars(container, count) {
    const sizes = ['small', 'medium', 'large'];
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = `star ${sizes[Math.floor(Math.random() * sizes.length)]}`;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        container.appendChild(star);
    }
}

function createEnhancedSparkles(container, count) {
    const colors = ['pink', 'purple', 'white'];
    const sizes = ['small', 'medium', 'large'];
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = `sparkle ${colors[Math.floor(Math.random() * colors.length)]} ${sizes[Math.floor(Math.random() * sizes.length)]}`;
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 4 + 's';
        sparkle.style.animationDuration = (3 + Math.random() * 3) + 's';
        container.appendChild(sparkle);
    }
}

function createFloatingHearts(container, count) {
    const hearts = ['💖', '💕', '💗', '💝', '💘'];
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (6 + Math.random() * 4) + 's';
        container.appendChild(heart);
    }
}

function createMagicDust(container, count) {
    for (let i = 0; i < count; i++) {
        const dust = document.createElement('div');
        dust.className = 'magic-dust';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.animationDelay = Math.random() * 6 + 's';
        dust.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(dust);
    }
}

// Confetti Explosion Function
function createConfettiExplosion() {
    const confettiContainer = document.getElementById('confettiContainer');
    const confettiTypes = ['square', 'circle', 'triangle', 'heart', 'star', 'diamond'];
    const confettiSymbols = {
        heart: ['💖', '💕', '💗', '💝', '💘'],
        star: ['⭐', '✨', '🌟', '💫', '⚡']
    };

    // Create confetti from left side
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const type = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
            confetti.className = `confetti ${type}`;

            if (type === 'heart') {
                confetti.textContent = confettiSymbols.heart[Math.floor(Math.random() * confettiSymbols.heart.length)];
            } else if (type === 'star') {
                confetti.textContent = confettiSymbols.star[Math.floor(Math.random() * confettiSymbols.star.length)];
            }

            // Position from left side
            confetti.style.left = Math.random() * 30 + '%';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';

            // Add horizontal movement from left
            const horizontalMovement = Math.random() * 200 + 100; // 100-300px to the right
            confetti.style.setProperty('--horizontal-movement', horizontalMovement + 'px');
            confetti.style.transform = `translateX(var(--horizontal-movement, 0px))`;

            confettiContainer.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 20);
    }

    // Create confetti from right side
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const type = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
            confetti.className = `confetti ${type}`;

            if (type === 'heart') {
                confetti.textContent = confettiSymbols.heart[Math.floor(Math.random() * confettiSymbols.heart.length)];
            } else if (type === 'star') {
                confetti.textContent = confettiSymbols.star[Math.floor(Math.random() * confettiSymbols.star.length)];
            }

            // Position from right side
            confetti.style.left = (70 + Math.random() * 30) + '%';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';

            // Add horizontal movement from right
            const horizontalMovement = -(Math.random() * 200 + 100); // -100 to -300px to the left
            confetti.style.setProperty('--horizontal-movement', horizontalMovement + 'px');
            confetti.style.transform = `translateX(var(--horizontal-movement, 0px))`;

            confettiContainer.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 20);
    }

    // Create center burst confetti
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const type = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
            confetti.className = `confetti ${type}`;

            if (type === 'heart') {
                confetti.textContent = confettiSymbols.heart[Math.floor(Math.random() * confettiSymbols.heart.length)];
            } else if (type === 'star') {
                confetti.textContent = confettiSymbols.star[Math.floor(Math.random() * confettiSymbols.star.length)];
            }

            // Position from center
            confetti.style.left = (40 + Math.random() * 20) + '%';
            confetti.style.animationDelay = Math.random() * 0.3 + 's';
            confetti.style.animationDuration = (2.5 + Math.random() * 1.5) + 's';

            confettiContainer.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4500);
        }, i * 15);
    }
}

// Audio setup
const backgroundMusic = new Audio('Birthday.mp3'); // Your local file path
const chimeSound = new Audio('https://www.soundjay.com/buttons/beep-01a.mp3'); // Example magical chime

backgroundMusic.volume = 0.1; // Subtle volume
backgroundMusic.loop = true;

function playChime() {
    chimeSound.volume = 0.3; // Moderate chime volume
    chimeSound.currentTime = 0; // Reset to start
    chimeSound.play().catch(error => console.log('Chime play failed:', error));
}

// Initialize enhanced particles for loading screen
const starsContainer = document.getElementById('starsContainer');
const sparklesContainer = document.getElementById('sparklesContainer');
const floatingHeartsContainer = document.getElementById('floatingHeartsContainer');
const magicDustContainer = document.getElementById('magicDustContainer');

createEnhancedStars(starsContainer, 80);
createEnhancedSparkles(sparklesContainer, 40);
createFloatingHearts(floatingHeartsContainer, 15);
createMagicDust(magicDustContainer, 30);

// Initialize particles for main page
const mainStarsContainer = document.getElementById('mainStarsContainer');
const mainSparklesContainer = document.getElementById('mainSparklesContainer');
const mainFloatingHeartsContainer = document.getElementById('mainFloatingHeartsContainer');

createEnhancedStars(mainStarsContainer, 120);
createEnhancedSparkles(mainSparklesContainer, 60);
playChime(); // Chime when sparkles initialize
createFloatingHearts(mainFloatingHeartsContainer, 20);

// Initialize particles for cake content page
const cakeStarsContainer = document.getElementById('cakeStarsContainer');
const cakeSparklesContainer = document.getElementById('cakeSparklesContainer');
const cakeFloatingHeartsContainer = document.getElementById('cakeFloatingHeartsContainer');
const cakeMagicDustContainer = document.getElementById('cakeMagicDustContainer');

createEnhancedStars(cakeStarsContainer, 100);
createEnhancedSparkles(cakeSparklesContainer, 50);
createFloatingHearts(cakeFloatingHeartsContainer, 18);
createMagicDust(cakeMagicDustContainer, 25);

// 3-Second Countdown Timer
let countdownSeconds = 3;
let countdownInterval;

function updateCountdown() {
    if (countdownSeconds > 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = countdownSeconds.toString().padStart(2, '0');

        if (countdownSeconds === 3) {
            document.getElementById('countdownMessage').textContent = 'Get ready for the celebration! 🎉';
        } else if (countdownSeconds === 2) {
            document.getElementById('countdownMessage').textContent = 'Almost there... 🎂';
        } else if (countdownSeconds === 1) {
            document.getElementById('countdownMessage').textContent = 'Here we go! ✨';
        }

        countdownSeconds--;
    } else {
        document.getElementById('seconds').textContent = '00';
        document.getElementById('countdownMessage').textContent = 'Time’s up! 🎂';
        clearInterval(countdownInterval);
        showCelebrateButton();
    }
}

function showCelebrateButton() {
    const countdownContainer = document.getElementById('countdownContainer');
    const celebrateButton = document.getElementById('celebrateButton');
    // Trigger confetti explosion
    createConfettiExplosion();
    // Hide countdown with fade out (smooth)
    countdownContainer.classList.add('countdown-hide');
    setTimeout(() => {
        countdownContainer.style.display = 'none';
        celebrateButton.classList.add('show');
    }, 500);
}

// MODIFIED: celebrate function to include music playback
function celebrate() {
    const mainPage = document.getElementById('mainPage');
    const cakeContent = document.getElementById('cakeContent');
    const celebrateButton = document.getElementById('celebrateButton');

    // Play background music on button click
    backgroundMusic.play().catch(error => {
        console.log('Background music play failed:', error.message);
        const musicPath = backgroundMusic.src;
        console.log('Attempted path:', musicPath);
        alert(`Music failed to play. Error: ${error.message}. Path: ${musicPath}. Please ensure the file exists in the 'music' folder.`);
    });

    // Trigger confetti explosion immediately
    createConfettiExplosion();

    // Hide the celebrate button
    celebrateButton.style.display = 'none';

    // Add slide-out animation to mainPage
    mainPage.classList.add('slide-out-to-top');

    // Start cakeContent scroll-up animation slightly before mainPage fully exits
    setTimeout(() => {
        cakeContent.classList.add('show'); // Triggers display: flex + scrollUpFromBottom animation
    }, 800); // Start 200ms before mainPage exit completes for overlap

    // Wait for the slide-out animation to finish
    setTimeout(() => {
        mainPage.style.display = 'none'; // Completely remove from view
        mainPage.classList.remove('slide-out-to-top'); // Clean up class

        // Trigger SVG animations after scroll-up completes
        setTimeout(() => {
            // Step-by-step triggering of cake animation
            setTimeout(() => {
                document.getElementById('bizcocho_1')?.beginElement();
            }, 0);

            setTimeout(() => {
                document.getElementById('relleno_1')?.beginElement();
            }, 1000); // bizcocho_1 dur = 1.2s → start next at 1s

            setTimeout(() => {
                document.getElementById('bizcocho_2')?.beginElement();
            }, 1800);

            setTimeout(() => {
                document.getElementById('relleno_2')?.beginElement();
            }, 2500);

            setTimeout(() => {
                document.getElementById('bizcocho_3')?.beginElement();
            }, 3200);

            setTimeout(() => {
                document.getElementById('crema')?.beginElement();
            }, 3800);

            // Add more confetti after cake appears
            createConfettiExplosion();
        }, 1000); // Delay matches scrollUpFromBottom animation duration
    }, 1000); // Duration of slideOutToTop animation
}

// Loading sequence
const loadingScreen = document.getElementById('loadingScreen');
const mainPage = document.getElementById('mainPage');
const loadingStatus = document.getElementById('loadingStatus');

const loadingMessages = [
    "Loading...",
    "Creating magic...",
    "Preparing surprises...",
    "Adding sparkles...",
    "Making it special...",
    "Almost ready..."
];

let messageIndex = 0;

const messageTimer = setInterval(() => {
    if (messageIndex < loadingMessages.length - 1) {
        messageIndex++;
        loadingStatus.textContent = loadingMessages[messageIndex];
    }
}, 1000);

setTimeout(() => {
    clearInterval(messageTimer);
    loadingStatus.textContent = "Ready!";
    backgroundMusic.play().catch(error => console.log('Background music play failed:', error)); // Start music when ready

    setTimeout(() => {
        loadingScreen.classList.add('hide');
        mainPage.classList.add('show');
        playChime(); // Chime when main page loads

        // Start 3-second countdown when main page loads
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Call immediately to show initial state
    }, 500);
}, 5500);
