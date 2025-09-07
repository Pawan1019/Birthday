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
backgroundMusic.volume = 0.1; // Subtle volume
backgroundMusic.loop = true;

// NEW: Image section music setup
const imageMusic = new Audio('ImageMusic.mp3'); // Replace with actual file path
imageMusic.volume = 0.1;
imageMusic.loop = true;

// NEW: Function to stop all music
function stopAllMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset to start
    imageMusic.pause();
    imageMusic.currentTime = 0; // Reset to start
}

// Modal management
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex'; // Ensure display is set before animation
    modal.classList.remove('fadeOut'); // Clear any previous fadeOut
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });

    // Reset and apply typing animation for title
    const title = modal.querySelector('.modal-title');
    title.style.width = '0';
    title.style.animation = 'none';
    title.offsetHeight; // Trigger reflow
    title.style.animation = 'typing 2s steps(' + (title.textContent.length || 20) + ') forwards, blink-caret 0.75s step-end infinite';

    // Reset and apply typing animation for message
    const message = modal.querySelector('.modal-message');
    message.style.width = '0';
    message.style.animation = 'none';
    message.offsetHeight; // Trigger reflow
    message.style.animation = 'typing 2s steps(30) forwards 0.5s, blink-caret 0.75s step-end infinite';
    createConfettiExplosion();
}

// New function for media modal without animations
function showMediaModal() {
    const modal = document.getElementById('mediaSelectionModal');
    modal.style.display = 'flex'; // Ensure display is set before animation
    modal.classList.remove('fadeOut'); // Clear any previous fadeOut
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
    createConfettiExplosion()
}

// Show image section
function showImageSection() {
    const modal = document.getElementById('mediaSelectionModal');
    const cakeContent = document.getElementById('cakeContent');
    const imageContent = document.getElementById('imageContent');
    const goToVideosBtn = document.querySelector('.image-content .go-to-videos-btn');
    const retryBtn = document.querySelector('.image-content .retry-btn');

    // Set navigation path
    navigationPath = "direct";

    // Show go to videos button, hide retry button
    goToVideosBtn.style.display = 'block';
    retryBtn.style.display = 'none';

    // NEW: Stop Birthday.mp3 and play Image music
    stopAllMusic();
    imageMusic.play().catch(error => {
        console.log('Image music play failed:', error.message);
        alert(`Image music failed to play. Error: ${error.message}. Path: ${imageMusic.src}. Please ensure the file exists.`);
    });

    // Fade out modal
    modal.classList.add('fadeOut');
    modal.classList.remove('show');

    setTimeout(() => {
        // Hide modal
        modal.style.display = 'none';
        modal.classList.remove('fadeOut');

        // Hide cake content
        cakeContent.style.display = 'none';
        cakeContent.classList.remove('show', 'slideInFromRight', 'slide-out-to-right');

        // Show image content
        imageContent.style.display = 'flex';
        imageContent.classList.remove('slide-out-to-left');
        requestAnimationFrame(() => {
            imageContent.classList.add('show');
            // Start carousel animation after 2 seconds
            setTimeout(() => {
                startCarouselAnimation();
            }, 2000);
        });
    }, 500); // Match fadeOut animation duration
    createConfettiExplosion()
}

// Show video section from modal
function showVideoSectionFromModal() {
    const modal = document.getElementById('mediaSelectionModal');
    const cakeContent = document.getElementById('cakeContent');
    const videoContent = document.getElementById('videoContent');
    const goToImagesBtn = document.querySelector('.go-to-images-btn');
    const retryBtn = document.querySelector('.video-content .retry-btn');

    // Set navigation path
    navigationPath = "direct";

    // Show go to images button, hide retry button
    goToImagesBtn.style.display = 'block';
    retryBtn.style.display = 'none';

    // NEW: Stop all music
    stopAllMusic();

    // Fade out modal
    modal.classList.add('fadeOut');
    modal.classList.remove('show');

    setTimeout(() => {
        // Hide modal
        modal.style.display = 'none';
        modal.classList.remove('fadeOut');

        // Hide cake content
        cakeContent.style.display = 'none';
        cakeContent.classList.remove('show', 'slideInFromRight', 'slide-out-to-right');

        // Show video content
        videoContent.style.display = 'flex';
        videoContent.classList.remove('slide-out-to-left', 'slide-out-to-right');
        requestAnimationFrame(() => {
            videoContent.classList.add('show');
        });
    }, 500); // Match fadeOut animation duration
    createConfettiExplosion()
}

// Show video section
function showVideoSection() {
    const imageContent = document.getElementById('imageContent');
    const videoContent = document.getElementById('videoContent');
    const goToImagesBtn = document.querySelector('.go-to-images-btn');
    const retryBtn = document.querySelector('.video-content .retry-btn');

    // Set navigation path
    navigationPath = "viaImages";

    // Show retry button, hide go to images button
    goToImagesBtn.style.display = 'none';
    retryBtn.style.display = 'block';

    // NEW: Stop all music
    stopAllMusic();

    // Animate image out
    imageContent.classList.add('slide-out-to-left');
    imageContent.classList.remove('show');

    setTimeout(() => {
        // Hide image content
        imageContent.style.display = 'none';
        imageContent.classList.remove('slide-out-to-left');

        // Show video content
        videoContent.style.display = 'flex';
        videoContent.classList.remove('slide-out-to-left', 'slide-out-to-right');
        requestAnimationFrame(() => {
            videoContent.classList.add('show');
        });
    }, 800);
    createConfettiExplosion()
}

// Show image section from video content
function showImageSectionFromVideo() {
    const videoContent = document.getElementById('videoContent');
    const imageContent = document.getElementById('imageContent');
    const goToVideosBtn = document.querySelector('.image-content .go-to-videos-btn');
    const retryBtn = document.querySelector('.image-content .retry-btn');

    // Set navigation path
    navigationPath = "viaVideos";

    // Show retry button, hide go to videos button
    goToVideosBtn.style.display = 'none';
    retryBtn.style.display = 'block';

    // NEW: Stop all music and play Image music
    stopAllMusic();
    imageMusic.play().catch(error => {
        console.log('Image music play failed:', error.message);
        alert(`Image music failed to play. Error: ${error.message}. Path: ${imageMusic.src}. Please ensure the file exists.`);
    });

    // Animate video out
    videoContent.classList.add('slide-out-to-right');
    videoContent.classList.remove('show');

    setTimeout(() => {
        // Hide video content
        videoContent.style.display = 'none';
        videoContent.classList.remove('slide-out-to-right');

        // Show image content
        imageContent.style.display = 'flex';
        imageContent.classList.remove('slide-out-to-left');
        requestAnimationFrame(() => {
            imageContent.classList.add('show');
            // Start carousel animation after 2 seconds
            setTimeout(() => {
                startCarouselAnimation();
            }, 2000);
        });
    }, 800);
    createConfettiExplosion()
}

// Retry page
function retryPage() {
    console.log('Retry button clicked or touched');
    stopAllMusic();
    window.location.reload();
}

// Close modal
document.querySelectorAll('.close-btn, .media-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal, .media-modal');
        modal.classList.add('fadeOut');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('fadeOut');
        }, 500);
    });
});

// Close on outside click
window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal, .media-modal').forEach(modal => {
        if (e.target === modal && modal.classList.contains('show')) {
            modal.classList.add('fadeOut');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('fadeOut');
            }, 500);
        }
    });
});

// Add event listeners for message boxes
document.querySelector('.left-message').addEventListener('click', () => showModal('leftModal'));
document.querySelector('.right-message').addEventListener('click', () => showModal('rightModal'));

// Add event listener for arrow button
document.querySelector('.arrow-button').addEventListener('click', showMediaModal);

// Add event listener for images button
document.querySelector('.images-btn').addEventListener('click', showImageSection);

// Add event listener for videos button
document.querySelector('.videos-btn').addEventListener('click', showVideoSectionFromModal);

// Add event listener for go to videos button
document.querySelector('.go-to-videos-btn').addEventListener('click', showVideoSection);

// Add event listener for go to images button
document.querySelector('.go-to-images-btn').addEventListener('click', showImageSectionFromVideo);

// Add event listeners for retry buttons
document.querySelectorAll('.retry-btn').forEach(btn => {
    btn.addEventListener('click', retryPage);
    btn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
        retryPage();
    });
});

// Image Paths
const imagePaths = [
    "images/IMG20230208134418.jpg",
    "images/IMG20230217111128.jpg",
    "images/IMG20230217111131.jpg",
    "images/IMG20230217111201.jpg",
    "images/IMG20230217111216.jpg",
    "images/IMG20230303150706.jpg",
    "images/IMG20230331171013.jpg",
    "images/IMG20230331171032.jpg",
    "images/IMG20230414142012.jpg",
    "images/IMG20230414142030.jpg",
    "images/IMG20231101131647.jpg",
    "images/IMG20231104152808.jpg",
    "images/IMG20231104152944.jpg",
    "images/IMG20231104153009.jpg",
    "images/IMG20231104155945.jpg",
    "images/IMG20231104160039.jpg",
    "images/IMG20231104161130.jpg",
    "images/IMG20231104161231.jpg",
    "images/IMG20231104161309.jpg",
    "images/IMG20231104163352.jpg",
    "images/IMG20231104164206.jpg",
    "images/IMG20231104165835.jpg",
    "images/IMG20231114105408.jpg",
    "images/IMG20231227160752.jpg",
    "images/IMG20231227172224.jpg",
    "images/IMG20231227172241.jpg",
    "images/IMG20240124113415.jpg",
    "images/Snapchat-37109598.jpg",
    "images/Snapchat-51003622.jpg",
    "images/Snapchat-108022518.jpg",
    "images/Snapchat-121749442.jpg",
    "images/Snapchat-130700279.jpg",
    "images/Snapchat-158449579.jpg",
    "images/Snapchat-163389530.jpg",
    "images/Snapchat-182764465.jpg",
    "images/Snapchat-202006394.jpg",
    "images/Snapchat-237560485.jpg",
    "images/Snapchat-252463391.jpg",
    "images/Snapchat-260331938.jpg",
    "images/Snapchat-268152612.jpg",
    "images/Snapchat-285522986.jpg",
    "images/Snapchat-285977458.jpg",
    "images/Snapchat-293452965.jpg",
    "images/Snapchat-297553750.jpg",
    "images/Snapchat-420848225.jpg",
    "images/Snapchat-438869934.jpg",
    "images/Snapchat-475647163.jpg",
    "images/Snapchat-477867036.jpg",
    "images/Snapchat-490621564.jpg",
    "images/Snapchat-534988195.jpg",
    "images/Snapchat-554616884.jpg",
    "images/Snapchat-556688579.jpg",
    "images/Snapchat-590704009.jpg",
    "images/Snapchat-610029816.jpg",
    "images/Snapchat-611102951.jpg",
    "images/Snapchat-666978768.jpg",
    "images/Snapchat-698724667.jpg",
    "images/Snapchat-753498799.jpg",
    "images/Snapchat-786122239.jpg",
    "images/Snapchat-823260590.jpg",
    "images/Snapchat-864128295.jpg",
    "images/Snapchat-907681930.jpg",
    "images/Snapchat-920013859.jpg",
    "images/Snapchat-943336172.jpg",
    "images/Snapchat-967027312.jpg",
    "images/Snapchat-986951374.jpg",
    "images/Snapchat-999948487.jpg",
    "images/Snapchat-1052780133.jpg",
    "images/Snapchat-1054156927.jpg",
    "images/Snapchat-1058335475.jpg",
    "images/Snapchat-1079187292.jpg",
    "images/Snapchat-1126524373.jpg",
    "images/Snapchat-1136435928.jpg",
    "images/Snapchat-1162224520.jpg",
    "images/Snapchat-1214033133.jpg",
    "images/Snapchat-1237716460.jpg",
    "images/Snapchat-1243901629.jpg",
    "images/Snapchat-1259788325.jpg",
    "images/Snapchat-1341595687.jpg",
    "images/Snapchat-1363766555.jpg",
    "images/Snapchat-1389610578.jpg",
    "images/Snapchat-1398249999.jpg",
    "images/Snapchat-1406086928.jpg",
    "images/Snapchat-1418606677.jpg",
    "images/Snapchat-1486257216.jpg",
    "images/Snapchat-1508978487.jpg",
    "images/Snapchat-1540068509.jpg",
    "images/Snapchat-1616484320.jpg",
    "images/Snapchat-1628869311.jpg",
    "images/Snapchat-1673430672.jpg",
    "images/Snapchat-1740254628.jpg",
    "images/Snapchat-1743136804.jpg",
    "images/Snapchat-1853582955.jpg",
    "images/Snapchat-1866657911.jpg",
    "images/Snapchat-1892496528.jpg",
    "images/Snapchat-1908433702.jpg",
    "images/Snapchat-1940137288.jpg",
    "images/Snapchat-1950145425.jpg",
    "images/Snapchat-2017580410.jpg",
    "images/Snapchat-2112845490.jpg",
    "images/Snapchat-2114230899.jpg",
    "images/Snapchat-2119810551.jpg",
    "images/IMG_20211006_143000.jpg",
    "images/IMG_20211020_165052_473.webp",
    "images/IMG_20211020_165253_018.webp",
    "images/IMG_20220102_080449.jpg",
    "images/IMG_20220102_080509.jpg",
    "images/IMG_20221030_004122.jpg"
];

document.addEventListener('DOMContentLoaded', () => { 
    const carousel = document.querySelector('.aurora-carousel'); 
    if (!carousel) return; 
    const track = carousel.querySelector('.carousel-track');  
    
    // Create original slides
    imagePaths.forEach((path, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="" data-src="${path}" alt="Image ${index + 1}" loading="lazy" class="gallery-image">`;
        track.appendChild(slide);
    });

    // Duplicate slides 3 times for smooth 3-peek infinite scrolling (total 324 slides)
    const originalSlides = Array.from(track.children);
    for (let i = 0; i < 2; i++) { // Add 2 more sets
        originalSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
    }

    const slides = Array.from(track.children); // 324 slides

    // Continuous animation setup
    let position = 0; // Starting position in %
    const numOriginal = imagePaths.length;
    const visibleSlides = 3;
    const isMobile = window.innerWidth <= 768;
    const gapPercent = isMobile ? 1 : 0.5; // Gap from CSS
    const slideWidthPercent = (100 / visibleSlides) - (gapPercent * (visibleSlides - 1) / visibleSlides);
    const cycleWidthPercent = (slideWidthPercent + gapPercent) * numOriginal; // Full cycle including gaps
    const durationPerImage = 2.5; // seconds per image
    const speedPerSecond = cycleWidthPercent / (numOriginal * durationPerImage);
    let animationId;
    let isPaused = true;
    let lastTime = 0;

    function animate(currentTime) {
        if (isPaused) return; // Skip if paused

        const deltaTime = currentTime - lastTime; // ms
        lastTime = currentTime;

        // Move position left (negative for rightward flow)
        position -= (speedPerSecond * (deltaTime / 1000));

        // Reset for infinite loop (seamless when hitting end of first set)
        if (position <= -cycleWidthPercent) {
            position += cycleWidthPercent;
        }

        track.style.transform = `translateX(${position}%)`;

        animationId = requestAnimationFrame(animate);
    }

    // Start animation
    function startAnimation() {
        if (!isPaused) {
            lastTime = performance.now();
            animationId = requestAnimationFrame(animate);
        }
    }

    // Pause/resume on hover (tape-like)
    function pauseAnimation() {
        isPaused = true;
        cancelAnimationFrame(animationId);
    }

    function resumeAnimation() {
        isPaused = false;
        startAnimation();
    }

    carousel.addEventListener('mouseenter', pauseAnimation);
    carousel.addEventListener('mouseleave', resumeAnimation);
    carousel.addEventListener('touchstart', pauseAnimation, { passive: true });
    carousel.addEventListener('touchend', resumeAnimation);

    // Lazy loading - Increased margin to preload peeks + extras
    const observer = new IntersectionObserver(entries => { 
        entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                const img = entry.target.querySelector('img'); 
                if (img.dataset.src) { 
                    img.src = img.dataset.src; 
                    img.removeAttribute('data-src'); 
                    // Enhance loaded image
                    img.style.filter = 'brightness(1.05) saturate(1.1)';
                } 
            } 
        }); 
    }, { root: carousel, rootMargin: '0px 50%' }); // Preload half screen ahead/behind
    slides.forEach(slide => observer.observe(slide)); 

    // Preload first 30 images to prevent gaps after 20
    for (let i = 0; i < 30; i++) {
        if (slides[i]) {
            const img = slides[i].querySelector('img');
            if (img.dataset.src && !img.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                // Manual onload trigger
                img.onload();
            }
        }
    }

    // Start the animation after a short delay for load
    setTimeout(startAnimation, 500);
});

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

// Initialize particles for image content page
const imageStarsContainer = document.getElementById('imageStarsContainer');
const imageSparklesContainer = document.getElementById('imageSparklesContainer');
const imageFloatingHeartsContainer = document.getElementById('imageFloatingHeartsContainer');
const imageMagicDustContainer = document.getElementById('imageMagicDustContainer');

createEnhancedStars(imageStarsContainer, 100);
createEnhancedSparkles(imageSparklesContainer, 50);
createFloatingHearts(imageFloatingHeartsContainer, 18);
createMagicDust(imageMagicDustContainer, 25);

// Initialize particles for image content page
const videoStarsContainer = document.getElementById('videoStarsContainer');
const videoSparklesContainer = document.getElementById('videoSparklesContainer');
const videoFloatingHeartsContainer = document.getElementById('videoFloatingHeartsContainer');
const videoMagicDustContainer = document.getElementById('videoMagicDustContainer');

createEnhancedStars(videoStarsContainer, 100);
createEnhancedSparkles(videoSparklesContainer, 50);
createFloatingHearts(videoFloatingHeartsContainer, 18);
createMagicDust(videoMagicDustContainer, 25);

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

    // NEW: Stop all music and play Birthday.mp3
    stopAllMusic();
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
    }else {
        clearInterval(messageTimer);
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainPage.style.display = 'flex';
            countdownInterval = setInterval(updateCountdown, 1000);
        }, 1000);
    }
}, 1000);

setTimeout(() => {
    clearInterval(messageTimer);
    loadingStatus.textContent = "Ready!";
    
    setTimeout(() => {
        loadingScreen.classList.add('hide');
        mainPage.classList.add('show');
        // Start 3-second countdown when main page loads
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Call immediately to show initial state
    }, 500);
}, 5500);
