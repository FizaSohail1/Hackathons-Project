document.addEventListener('DOMContentLoaded', function() {
    const resumeForm = document.getElementById('resumeForm');
    const resumeDisplay = document.getElementById('resumeDisplay');

    if (resumeForm) {
        resumeForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents page reload

            // Get form values
            const name = (document.getElementById('name')! as HTMLInputElement).value;
            const contact = (document.getElementById('contact')! as HTMLInputElement).value;
            const email = (document.getElementById('email')! as HTMLInputElement).value;
            const school = (document.getElementById('school')! as HTMLInputElement).value;
            const degree = (document.getElementById('degree')! as HTMLInputElement).value;
            const company = (document.getElementById('company')! as HTMLInputElement).value;
            const position = (document.getElementById('position')! as HTMLInputElement).value;
            const Description = (document.getElementById('experienceDesc')! as HTMLTextAreaElement).value;
            const skills = (document.getElementById('skills')! as HTMLInputElement).value.split(',').map(skill => skill.trim());
            
            const resumeHTML = `
            <h1>Resume</h1>
            <div class="card">
            <h2>Personal Information</h2>
               <p><strong>Name:</strong>${name}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Email:</strong> ${email}</p>
                 <section class="skills-container">
                    <h2>Skills</h2>   
                        ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}  
                </section>   
                <section class="secoundSection">
                    <h2>Education</h2>
                <p><strong>School/College</strong> ${school}</p>
                <p><strong>Degree:</strong> ${degree}</p>
                  
                </section>
                <section class="experience secoundSection">
                    <h2> Work Experience</h2>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Psition:</strong> ${position}</p>
                <p><strong>Description:</strong> ${Description}</p>
                   
                </section>
          </div> 
        `;

            // Display the resume
            if (resumeDisplay) {
                resumeDisplay.innerHTML = resumeHTML;
            }
        });
    }
});
