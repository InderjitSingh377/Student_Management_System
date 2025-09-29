function displayfeedback() {
  const tfeedback = JSON.parse(localStorage.getItem("tfeedback")) || [];
  const checkteacherfeedback = document.getElementById("checkteacherfeedback");
  checkteacherfeedback.innerHTML = "";

  
  const teachersFeedback = tfeedback.length; // Count the number of tfeedback
  document.getElementById("teacherfeed").innerHTML = teachersFeedback; // Update the heading with the count
  
  const feedbackList = JSON.parse(localStorage.getItem("studentFeedbackList")) || [];

  const studentFeedback = feedbackList.length; // Count the number of studentfeedback
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
      
       </tr>`;
    checkteacherfeedback.innerHTML += row;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayfeedback();
});