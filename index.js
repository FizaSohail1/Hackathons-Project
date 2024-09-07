var toggleButton = document.getElementById("toggleSkills");
var hiddenSkills = document.querySelectorAll(".hidden-skill");
var skillsList = document.querySelector(".skills-list");
var isExpanded = false;
toggleButton.addEventListener("click", function () {
    if (isExpanded) {
        hiddenSkills.forEach(function (skill) { return skill.style.display = "none"; });
        skillsList.style.maxHeight = "120px";
        toggleButton.textContent = "Show More";
    }
    else {
        hiddenSkills.forEach(function (skill) { return skill.style.display = "block"; });
        skillsList.style.maxHeight = "500px"; // Adjust height based on content
        toggleButton.textContent = "Show Less";
    }
    isExpanded = !isExpanded;
});
