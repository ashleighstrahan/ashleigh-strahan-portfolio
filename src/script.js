const textValues = ["QA Engineer", "Java Developer", "Front-End Developer"];
let currentIndex = 0;

function changeText() {
  const changingText = document.getElementById("hero_desc");
  changingText.textContent = textValues[currentIndex];
  currentIndex = (currentIndex + 1) % textValues.length;
}

setInterval(changeText, 3000);

const icons = document.querySelectorAll("#skills-section-icons");
const centerOfPage = window.innerHeight / 2;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + centerOfPage;

  icons.forEach((icon) => {
    const iconRect = icon.getBoundingClientRect();
    const iconMiddle = iconRect.top + iconRect.height / 2;

    if (iconMiddle < scrollPosition) {
      icon.style.opacity = 1;
    }
  });
});
