/// Get Refrences To Form and Display Area
var form1 = document.getElementById('resume-form');
var displayArea1 = document.getElementById('resume-display');
// Handle Form Submission
form1.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // Input Collection
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate The Resume Editable Dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable = \"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable = \"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable = \"true\">").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable = \"true\">").concat(address, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable = \"true\"><b>Education:</b>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable = \"true\"><b>Experience:</b>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable = \"true\"><b>Skills:</b>").concat(skills, "</p>\n ");
    // Display The Generated Resume
    if (displayArea1) {
        displayArea1.innerHTML = resumeHTML;
    }
    else {
        console.error('Please Fill The Field');
    }
});
