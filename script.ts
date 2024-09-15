/// Get Refrences To Form and Display Area

const form1 = document.getElementById('resume-form') as HTMLFormElement;
const displayArea1 = document.getElementById('resume-display') as HTMLDivElement;

// Handle Form Submission
form1.addEventListener('submit', (event:Event) => {
    event.preventDefault(); //prevent page reload

    // Input Collection
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate The Resume Editable Dynamically

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable = "true">${name}</span></p>
    <p><b>Email:</b><span contenteditable = "true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable = "true">${phone}</span></p>
    <p><b>Address:</b><span contenteditable = "true">${address}</span></p>
    
    <h3>Education</h3>
    <p contenteditable = "true"><b>Education:</b>${education}</p>

    <h3>Experience</h3>
    <p contenteditable = "true"><b>Experience:</b>${experience}</p>

    <h3>Skills</h3>
    <p contenteditable = "true"><b>Skills:</b>${skills}</p>
 `;

 // Display The Generated Resume
 if(displayArea1){
    displayArea1.innerHTML = resumeHTML;
}
 else{console.error('Please Fill The Field')

 }
});