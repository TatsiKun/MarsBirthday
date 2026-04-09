let clicks = 0;
const requiredClicks = 5; // change later if you want

const gift = document.getElementById("gift");
const button = document.getElementById("openBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  clicks++;

  // Shake animation
  gift.classList.add("shake");
  setTimeout(() => gift.classList.remove("shake"), 300);

  // Open after enough clicks
  if (clicks >= requiredClicks) {
    gift.src = "https://via.placeholder.com/200?text=🎉"; // replace later
    message.classList.remove("hidden");

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    button.disabled = true;
  }
});
