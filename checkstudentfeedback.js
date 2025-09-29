function displayStudentFeedback() {
    const feedbackList = JSON.parse(localStorage.getItem("studentFeedbackList")) || [];
    const checkteacherfeedback = document.getElementById("checkteacherfeedback");
	
	const tfeedback = JSON.parse(localStorage.getItem("tfeedback")) || [];

	const teachersFeedback = tfeedback.length; // Count the number of tfeedback
  document.getElementById("teacherfeed").innerHTML = teachersFeedback; // Update the heading with the count
	 const studentFeedback = feedbackList.length; // Count the number of tfeedback
  document.getElementById("studentfeed").innerHTML = studentFeedback; // Update the heading with the count
  
  const totalFeedback  = tfeedback.length + feedbackList.length ;
      document.getElementById("totalfeed").innerHTML = totalFeedback; // Update the heading with the count
    checkteacherfeedback.innerHTML = feedbackList.map((feedback, index) => `
	
	
        <tr>
            <td>${feedback.teacherName}</td>
            <td>${feedback.employeeId}</td>
            <td>${feedback.studentName}</td>
            <td>${feedback.studentUid}</td>
            <td>${feedback.teacherBehaviour}</td>
            <td>${feedback.usingMobile}</td>
            <td>${feedback.teacherTeach}</td>
            <td>${feedback.additionalComments}</td>
        </tr>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  displayStudentFeedback();
});
