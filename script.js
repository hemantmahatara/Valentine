document.addEventListener("DOMContentLoaded", () => {

    /* ---------- FIRST SESSION ---------- */

    const firstSlides = [
        {
            image: "IMG_1003.JPG",
            text: "I still remember the moment we first met. I didn't know it then, but something about you stayed with me."
        },
        {
            image: "IMG_0129.JPG",
            text: "Somewhere between the laughs and little moments, you slowly became special to me."
        },
        {
            image: "IMG_1370.JPG",
            text: "And that's how I fell in love with you — not all at once, but piece by piece. ❤️"
        }
    ];

    let firstIndex = 0;

    const imgElement = document.getElementById("storyImage");
    const textElement = document.getElementById("storyText");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    function updateFirstSlide() {
        imgElement.src = firstSlides[firstIndex].image;
        textElement.innerHTML = `<p class="story">${firstSlides[firstIndex].text}</p>`;
    }

    nextBtn.addEventListener("click", () => {
        if (firstIndex < firstSlides.length - 1) {
            firstIndex++;
            updateFirstSlide();
        } else {
            // Move to Facebook session
            document.querySelector(".first-meet").classList.add("hidden");
            document.getElementById("facebookStory").classList.remove("hidden");
        }
    });

    prevBtn.addEventListener("click", () => {
        if (firstIndex > 0) {
            firstIndex--;
            updateFirstSlide();
        }
    });

    /* ---------- SECOND SESSION ---------- */

    const fbSlides = [
        {
            image: "Screenshot_20260207_011814_Messenger.jpg",
            text: "It started with simple messages, but soon we were talking for hours without realizing how time passed."
        },
        {
            image: "IMG-20240526-WA0005.jpg",                    
            text: "We shared photos, stories, and little details of our lives — slowly getting closer."
        },
        {
            image: "Screenshot_20260207_013945_Messenger.jpg",
            text: "And then one day… you proposed me 💖"
        }
    ];

    let fbIndex = 0;

    const fbImg = document.getElementById("fb-image");
    const fbText = document.getElementById("fb-text");
    const fbNext = document.getElementById("fb-next");
    const fbPrev = document.getElementById("fb-prev");

    function updateFbSlide() {
        fbImg.src = fbSlides[fbIndex].image;
        fbText.innerHTML = `<p class="story">${fbSlides[fbIndex].text}</p>`;
    }

    fbNext.addEventListener("click", () => {
        if (fbIndex < fbSlides.length - 1) {
            fbIndex++;
            updateFbSlide();
        } else {
            // Move to proposal question
            document.getElementById("facebookStory").classList.add("hidden");
            document.getElementById("proposalQuestion").classList.remove("hidden");
        }
    });

    fbPrev.addEventListener("click", () => {
        if (fbIndex > 0) {
            fbIndex--;
            updateFbSlide();
        }
    });

    /* ---------- PROPOSAL QUESTION ---------- */

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.addEventListener("click", () => {
        // Hide question, show happy response
        document.getElementById("proposalQuestion").classList.add("hidden");
        document.getElementById("proposalSection").classList.remove("hidden");
        startTypewriter();
        
        // Play romantic music
        const bgMusic = document.getElementById("bgMusic");
        bgMusic.play();
    });

    noBtn.addEventListener("click", () => {
        // Hide question, show sad response
        document.getElementById("proposalQuestion").classList.add("hidden");
        document.getElementById("sadSection").classList.remove("hidden");
        
        // Sad music will autoplay from HTML
    });

    /* ---------- PROPOSAL YES RESPONSE ---------- */

    const proposalText =
        "You shared your heart with me so honestly, so fearlessly.\n" +
        "And when you proposed me,\n" +
        "I knew my forever had already begun.\n\n" +
        "Yes… always yes ❤️";

    let textIndex = 0;
    const proposalElement = document.getElementById("proposalText");

    function startTypewriter() {
        proposalElement.innerHTML = ""; // Clear any existing text
        textIndex = 0;
        typeNextChar();
    }

    function typeNextChar() {
        if (textIndex < proposalText.length) {
            const char = proposalText.charAt(textIndex);
            if (char === '\n') {
                proposalElement.innerHTML += '<br>';
            } else {
                proposalElement.innerHTML += char;
            }
            textIndex++;
            setTimeout(typeNextChar, 50);
        }
    }

    /* ---------- MUSIC TOGGLE ---------- */

    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");

    musicToggle.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = "🔊 Music On";
        } else {
            bgMusic.pause();
            musicToggle.textContent = "🔇 Music Off";
        }
    });

});
