document.getElementById("addteachinfeedback").addEventListener("click", function() {
  addTeachingfeedback();
});

function addTeachingfeedback() {
  const TeachersName = document.getElementById("teachersname").value;
  const EmployeeId = document.getElementById("employeeId").value;
  const StudentName = document.getElementById("studentName").value;
  const StudentUid = document.getElementById("studentUid").value;
  const StudentBehaviourinclass = document.getElementById("behaviourinclass").value;
  const UsingMobilePhoneinClass = document.getElementById("interactionwithstudents").value;
  const AdditionalComments = document.getElementById("additionalCommentT").value;
  

  const vacancy = {
    TeachersName,
    EmployeeId,
    StudentName,
    StudentUid,
    StudentBehaviourinclass,
    UsingMobilePhoneinClass,
    AdditionalComments
  };

  let tfeedback = JSON.parse(localStorage.getItem("tfeedback")) || [];
  tfeedback.push(vacancy);
  localStorage.setItem("tfeedback", JSON.stringify(tfeedback));
  clearForm();
  displayfeedback();
}

function displayfeedback() {
  const tfeedback = JSON.parse(localStorage.getItem("tfeedback")) || [];
  const displayteacherfeedback = document.getElementById("displayteacherfeedback");
  displayteacherfeedback.innerHTML = "";


  const teachersFeedback = tfeedback.length; // Count the number of tfeedback
  document.getElementById("teacherfeed").innerHTML = teachersFeedback; // Update the heading with the count
  
     const feedbackList = JSON.parse(localStorage.getItem("studentFeedbackList")) || [];

  const studentFeedback = feedbackList.length; // Count the number of tfeedback
  document.getElementById("studentfeed").innerHTML = studentFeedback; // Update the heading with the count
  
  const totalFeedback  = tfeedback.length + feedbackList.length ;
      document.getElementById("totalfeed").innerHTML = totalFeedback; // Update the heading with the count

  
  tfeedback.forEach((vacancy, index) => {
    const row = `<tr>
      <td>${vacancy.TeachersName}</td>
      <td>${vacancy.EmployeeId}</td>
      <td>${vacancy.StudentName}</td>
      <td>${vacancy.StudentUid}</td>
      <td>${vacancy.StudentBehaviourinclass}</td>
      <td>${vacancy.UsingMobilePhoneinClass}</td>
      <td>${vacancy.AdditionalComments}</td>
      
     
	                <td><button onclick="deleteFeedback(${index})" class="btn btn-danger">Delete</button></td>

    </tr>`;
    displayteacherfeedback.innerHTML += row;
  });
}

function deleteFeedback(index) {
  let tfeedback = JSON.parse(localStorage.getItem("tfeedback")) || [];
  tfeedback.splice(index, 1);
  localStorage.setItem("tfeedback", JSON.stringify(tfeedback));
  displayfeedback();
}





function clearForm() {
  document.getElementById("teacherfeedbackForm").reset();
}

document.addEventListener("DOMContentLoaded", () => {
  displayfeedback();
});

// Display vacancies on page load
displayfeedback();