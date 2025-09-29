function displayfeedback() {
  const tfeedback = JSON.parse(localStorage.getItem("tfeedback")) || [];
  const feedbackList = JSON.parse(localStorage.getItem("studentFeedbackList")) || [];

  const teachersFeedback = tfeedback.length; // Count the number of tfeedback
  document.getElementById("teacherfeed").innerHTML = teachersFeedback; // Update the heading with the count

  const studentFeedback = feedbackList.length; // Count the number of studentfeedback
  document.getElementById("studentfeed").innerHTML = studentFeedback; // Update the heading with the count

  const totalFeedback = teachersFeedback + studentFeedback;
  document.getElementById("totalfeed").innerHTML = totalFeedback; // Update the heading with the count
}

// Call the function only once to display feedback data
displayfeedback();