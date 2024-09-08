document.addEventListener('DOMContentLoaded', function () {
    var resumeForm = document.getElementById('resumeForm');
    var resumeDisplay = document.getElementById('resumeDisplay');
    var copyLinkBtn = document.getElementById('copyLinkBtn');
    if (resumeForm) {
        resumeForm.addEventListener('submit', function (event) {
            var _a;
            event.preventDefault();
            // Form element selections
            var nameInput = document.getElementById('name');
            var contactInput = document.getElementById('contact');
            var emailInput = document.getElementById('email');
            var schoolInput = document.getElementById('school');
            var degreeInput = document.getElementById('degree');
            var companyInput = document.getElementById('company');
            var positionInput = document.getElementById('position');
            var experienceDescInput = document.getElementById('experienceDesc');
            var skillsInput = document.getElementById('skills');
            var photoInput = document.getElementById('photo');
            var usernameInput = document.getElementById('username');
            if (nameInput && contactInput && emailInput && schoolInput && degreeInput &&
                companyInput && positionInput && experienceDescInput && skillsInput && resumeDisplay) {
                var name_1 = nameInput.value;
                var contact = contactInput.value;
                var email = emailInput.value;
                var school = schoolInput.value;
                var degree = degreeInput.value;
                var company = companyInput.value;
                var position = positionInput.value;
                var description = experienceDescInput.value;
                var skills = skillsInput.value.split(',').map(function (skill) { return skill.trim(); });
                var username = usernameInput.value.trim().toLowerCase().replace(/\s+/g, '-');
                var photoURL_1 = '';
                if ((_a = photoInput === null || photoInput === void 0 ? void 0 : photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) {
                    var reader_1 = new FileReader();
                    reader_1.readAsDataURL(photoInput.files[0]);
                    reader_1.onload = function () {
                        var _a;
                        photoURL_1 = reader_1.result;
                        (_a = document.getElementById('profileImg')) === null || _a === void 0 ? void 0 : _a.setAttribute('src', photoURL_1);
                    };
                }
                // unique URL 
                var uniqueURL_1 = "https://".concat(nameInput, ".vercel.app/resume");
                var urlDisplay = document.createElement('p');
                urlDisplay.innerHTML = "Your unique resume URL: <a href=\"".concat(uniqueURL_1, "\" target=\"_blank\">").concat(uniqueURL_1, "</a>");
                if (resumeDisplay) {
                    resumeDisplay.appendChild(urlDisplay);
                }
                //  Copy Link button
                if (copyLinkBtn) {
                    copyLinkBtn.addEventListener('click', function () {
                        navigator.clipboard.writeText(uniqueURL_1)
                            .then(function () { return alert('URL copied to clipboard!'); })
                            .catch(function () { return alert('Failed to copy URL.'); });
                    });
                }
                var resumeHTML = "\n                    <h1>Resume</h1>\n                    <div class=\"card\">\n                        <img id=\"profileImg\" src=\"".concat(photoURL_1, "\" alt=\"Profile Picture\">\n                         <h2>Personal Information</h2>\n                        <p><strong>Name:</strong> ").concat(name_1, "</p>\n                        <p><strong>Contact:</strong> ").concat(contact, "</p>\n                        <p><strong>Email:</strong> ").concat(email, "</p>\n                        <section class=\"skills-container\">\n                            <h2>Skills</h2>\n                            <ul>\n                                ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                            </ul>\n                        </section>\n\n                        <section class=\"secoundSection\">\n                            <h2>Education</h2>\n                            <p><strong>School/College:</strong> ").concat(school, "</p>\n                            <p><strong>Degree:</strong> ").concat(degree, "</p>\n                        </section>\n\n                        <section class=\"experience secoundSection\">\n                            <h2> Work Experience</h2>\n                            <p><strong>Company:</strong> ").concat(company, "</p>\n                            <p><strong>Position:</strong> ").concat(position, "</p>\n                            <p><strong>Description:</strong> ").concat(description, "</p>\n                        </section>\n                    </div>\n                ");
                var downloadLink = document.createElement('a');
                downloadLink.href = 'data:text/html;charset = utf-8,' + encodeURIComponent(resumeHTML);
                downloadLink.textContent = 'Download your resume';
                // Displaying the generated resume
                resumeDisplay.innerHTML = resumeHTML;
            }
        });
    }
});
// Download as PDF function
function downloadAsPdf() {
    var resumeDisplay = document.getElementById('resumeDisplay');
    if (resumeDisplay) {
        html2pdf().from(resumeDisplay).save();
    }
}
