document.getElementById("addStudentFeedback").addEventListener("click", function() {
    addStudentFeedback();
});

function addStudentFeedback() {
    const teacherName = document.getElementById("teachersNameStd").value;
    const employeeId = document.getElementById("employeeIdStd").value;
    const studentName = document.getElementById("studentNameStd").value;
    const studentUid = document.getElementById("studentUidStd").value;
    const teacherBehaviour = document.getElementById("teacherBehaviourStd").value;
    const usingMobile = document.getElementById("usingMobileStd").value;
    const teacherTeach = document.getElementById("teacherTeachStd").value;
    const additionalComments = document.getElementById("additionalCommentsStd").value;

    const feedback = {
        teacherName,
        employeeId,
        studentName,
        studentUid,
        teacherBehaviour,
        usingMobile,
        teacherTeach,
        additionalComments
    };

    let feedbackList = JSON.parse(localStorage.getItem("studentFeedbackList")) || [];
    feedbackList.push(feedback);
    localStorage.setItem("studentFeedbackList", JSON.stringify(feedbackList));

    displayStudentFeedback();
    document.getElementById("studentFeedbackForm").reset();
}

function displayStudentFeedback() {
    const feedbackList = JSON.parse(localStorage.getItem("studentFeedbackList")) || [];
    const feedbackDisplay = document.getElementById("studentFeedbackDisplay");
	 
	 const studentFeedback = feedbackList.length; // Count the number of tfeedback
  document.getElementById("studentfeed").innerHTML = studentFeedback; // Update the heading with the count
 
	
	  const tfeedback = JSON.parse(localStorage.getItem("tfeedback")) || [];

	const teachersFeedback = tfeedback.length; // Count the number of tfeedback
  document.getElementById("teacherfeed").innerHTML = teachersFeedback; // Update the heading with the count
  
  const totalFeedback  = tfeedback.length + feedbackList.length ;
      document.getElementById("totalfeed").innerHTML = totalFeedback; // Update the heading with the count

  
    feedbackDisplay.innerHTML = feedbackList.map((feedback, index) => `
        <tr>
            <td>${feedback.teacherName}</td>
            <td>${feedback.employeeId}</td>
            <td>${feedback.studentName}</td>
            <td>${feedback.studentUid}</td>
            <td>${feedback.teacherBehaviour}</td>
            <td>${feedback.usingMobile}</td>
            <td>${feedback.teacherTeach}</td>
            <td>${feedback.additionalComments}</td>
            <td><button onclick="deleteFeedback(${index})" class="btn btn-danger">Delete</button></td>
        </tr>
    `).join("");
}

function deleteFeedback(index) {
    let feedbackList = JSON.parse(localStorage.getItem("studentFeedbackList"));
    feedbackList.splice(index, 1);
    localStorage.setItem("studentFeedbackList", JSON.stringify(feedbackList));
    displayStudentFeedback();
}

document.addEventListener("DOMContentLoaded", displayStudentFeedback);