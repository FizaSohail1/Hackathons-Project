declare var html2pdf: any;
document.addEventListener('DOMContentLoaded', function() {
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
    const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement | null;
    const copyLinkBtn = document.getElementById('copyLinkBtn') as HTMLButtonElement | null;

    if (resumeForm) {
        resumeForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Form element selections
            const nameInput = document.getElementById('name') as HTMLInputElement | null;
            const contactInput = document.getElementById('contact') as HTMLInputElement | null;
            const emailInput = document.getElementById('email') as HTMLInputElement | null;
            const schoolInput = document.getElementById('school') as HTMLInputElement | null;
            const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
            const companyInput = document.getElementById('company') as HTMLInputElement | null;
            const positionInput = document.getElementById('position') as HTMLInputElement | null;
            const experienceDescInput = document.getElementById('experienceDesc') as HTMLTextAreaElement | null;
            const skillsInput = document.getElementById('skills') as HTMLInputElement | null;
            const photoInput = document.getElementById('photo') as HTMLInputElement | null;
            const usernameInput = document.getElementById('username') as HTMLInputElement
            if (nameInput && contactInput && emailInput && schoolInput && degreeInput &&
                companyInput && positionInput && experienceDescInput && skillsInput && resumeDisplay) {

                const name = nameInput.value;
                const contact = contactInput.value;
                const email = emailInput.value;
                const school = schoolInput.value;
                const degree = degreeInput.value;
                const company = companyInput.value;
                const position = positionInput.value;
                const description = experienceDescInput.value;
                const skills = skillsInput.value.split(',').map(skill => skill.trim());
                const username = usernameInput.value.trim().toLowerCase().replace(/\s+/g, '-');

                let photoURL = '';
                if (photoInput?.files?.[0]) {
                    const reader = new FileReader();
                    reader.readAsDataURL(photoInput.files[0]);
                    reader.onload = function() {
                        photoURL = reader.result as string;
                        document.getElementById('profileImg')?.setAttribute('src', photoURL);
                    };
                }

                 // unique URL 
                 const uniqueURL = `https://${nameInput}.vercel.app/resume`;
                 const urlDisplay = document.createElement('p');
                 urlDisplay.innerHTML = `Your unique resume URL: <a href="${uniqueURL}" target="_blank">${uniqueURL}</a>`;
                 if (resumeDisplay) {
                     resumeDisplay.appendChild(urlDisplay);
                 }
                 //  Copy Link button
                 if (copyLinkBtn) {
                     copyLinkBtn.addEventListener('click', function () {
                         navigator.clipboard.writeText(uniqueURL)
                             .then(() => alert('URL copied to clipboard!'))
                             .catch(() => alert('Failed to copy URL.'));
                     });
                 }
                const resumeHTML = `
                    <h1>Resume</h1>
                    <div class="card">
                        <img id="profileImg" src="${photoURL}" alt="Profile Picture">
                         <h2>Personal Information</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Contact:</strong> ${contact}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <section class="skills-container">
                            <h2>Skills</h2>
                            <ul>
                                ${skills.map(skill => `<li>${skill}</li>`).join('')}
                            </ul>
                        </section>

                        <section class="secoundSection">
                            <h2>Education</h2>
                            <p><strong>School/College:</strong> ${school}</p>
                            <p><strong>Degree:</strong> ${degree}</p>
                        </section>

                        <section class="experience secoundSection">
                            <h2> Work Experience</h2>
                            <p><strong>Company:</strong> ${company}</p>
                            <p><strong>Position:</strong> ${position}</p>
                            <p><strong>Description:</strong> ${description}</p>
                        </section>
                    </div>
                `;

               const downloadLink = document.createElement('a')
               downloadLink.href = 'data:text/html;charset = utf-8,' + encodeURIComponent(resumeHTML)
               downloadLink.textContent = 'Download your resume'

                // Displaying the generated resume
                resumeDisplay.innerHTML = resumeHTML;
            }
        });
    }
});

// Download as PDF 
function downloadAsPdf() {
    const resumeDisplay = document.getElementById('resumeDisplay') as HTMLElement | null;
    if (resumeDisplay) {
        html2pdf().from(resumeDisplay).save();
    }
}
