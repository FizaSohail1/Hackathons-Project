document.addEventListener('DOMContentLoaded', function () {
    var resumeForm = document.getElementById('resumeForm');
    var resumeDisplay = document.getElementById('resumeDisplay');
    if (resumeForm) {
        resumeForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents page reload
            // Get form values
            var name = document.getElementById('name').value;
            var contact = document.getElementById('contact').value;
            var email = document.getElementById('email').value;
            var school = document.getElementById('school').value;
            var degree = document.getElementById('degree').value;
            var company = document.getElementById('company').value;
            var position = document.getElementById('position').value;
            var Description = document.getElementById('experienceDesc').value;
            var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
            // Generate resume HTML
            var resumeHTML = "\n            <h1>Resume</h1>\n            <div class=\"card\">\n            <h2>Personal Information</h2>\n               <p><strong>Name:</strong>".concat(name, "</p>\n                <p><strong>Contact:</strong> ").concat(contact, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                 <section class=\"skills-container\">\n                    <h2>Skills</h2>   \n                        ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "  \n                </section>   \n                <section class=\"secoundSection\">\n                    <h2>Education</h2>\n                <p><strong>School/College</strong> ").concat(school, "</p>\n                <p><strong>Degree:</strong> ").concat(degree, "</p>\n                  \n                </section>\n                <section class=\"experience secoundSection\">\n                    <h2> Work Experience</h2>\n                <p><strong>Company:</strong> ").concat(company, "</p>\n                <p><strong>Psition:</strong> ").concat(position, "</p>\n                <p><strong>Description:</strong> ").concat(Description, "</p>\n                   \n                </section>\n          </div> \n        ");
            // Display the resume
            if (resumeDisplay) {
                resumeDisplay.innerHTML = resumeHTML;
            }
        });
    }
});
