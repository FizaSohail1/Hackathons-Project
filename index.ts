const toggleButton = document.getElementById("toggleSkills") as HTMLButtonElement;
const hiddenSkills = document.querySelectorAll(".hidden-skill") as NodeListOf<HTMLLIElement>;
const skillsList = document.querySelector(".skills-list") as HTMLDivElement;
let opened = false;

toggleButton.addEventListener("click", () => {
    if (opened) {
        hiddenSkills.forEach(skill => skill.style.display = "none");
        skillsList.style.maxHeight = "120px";
        toggleButton.textContent = "Show More";
    } else {
        hiddenSkills.forEach(skill => skill.style.display = "block");
        skillsList.style.maxHeight = "500px"; // Adjust height based on content
        toggleButton.textContent = "Show Less";
    }
    opened = !opened;
});