function changeJobTitle() {
  const jobTitles = [
    "QA Engineer",
    "Java Developer",
    "Front-End Developer"
  ];
  const currentJobTitle = document.getElementById("hero_desc").textContent;
  const currentIndex = jobTitles.indexOf(currentJobTitle);

  if (currentIndex !== -1) {
    const nextIndex = (currentIndex + 1) % jobTitles.length;
    const nextJobTitle = jobTitles[nextIndex];
    document.getElementById("hero_desc").textContent = nextJobTitle;
  }
}

// Set an interval to change the job title every 3 seconds
setInterval(changeJobTitle, 2000);
