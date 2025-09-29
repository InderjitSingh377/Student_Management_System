// Function to display the number of teachers
function displayTeacherCount() {
    const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const totalTeachers = teachers.length; // Count the number of teachers
    document.getElementById("totalteacher").textContent = totalTeachers; // Update the heading with the count
}



const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)


// Function to display teachers in the admin dashboard
function displayTeachers() {
    const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const teacherContainer = document.getElementById("teacher");


const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
  
  const techingVacancy = vacancies.length; // Count the number of vacancies
  document.getElementById("teachvacan").innerHTML = techingVacancy; // Update the heading with the count
  
      const nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];

   const nontechingVacancy = nonTeachingVacancies.length; // Count the number of vacancies
   document.getElementById("nonteachvacan").innerHTML = nontechingVacancy; // Update the heading with the count
  
   const totalVacancy  = vacancies.length + nonTeachingVacancies.length ;
      document.getElementById("totalvacancy").innerHTML = totalVacancy; // Update the heading with the count


const feedbackList = JSON.parse(localStorage.getItem("studentFeedbackList")) || [];
    const checkteacherfeedback = document.getElementById("checkteacherfeedback");
	
	const tfeedback = JSON.parse(localStorage.getItem("tfeedback")) || [];

	const teachersFeedback = tfeedback.length; // Count the number of tfeedback
  document.getElementById("teacherfeed").innerHTML = teachersFeedback; // Update the heading with the count
	 const studentFeedback = feedbackList.length; // Count the number of tfeedback
  document.getElementById("studentfeed").innerHTML = studentFeedback; // Update the heading with the count
  
  const totalFeedback  = tfeedback.length + feedbackList.length ;
      document.getElementById("totalfeed").innerHTML = totalFeedback; // Update the heading with the count
    
  
    teacherContainer.innerHTML = ""; // Clear any existing content

    teachers.forEach((teacher, index) => {
        const teacherDiv = document.createElement("div");
        teacherDiv.classList.add("student");

        teacherDiv.innerHTML = `
            <div class="info">
                <img src="${teacher.image}" alt="${teacher.name}" width="40px" height="40px">
                <div>
                    <h4>${teacher.name}</h4>
                    <small>${teacher.subject}</small>
                </div>
            </div>
            <div class="contact">
                <i class="las la-user-circle"></i>
                <i class="las la-comment"></i>
                <i class="las la-phone"></i>
            </div>
        `;

        teacherContainer.appendChild(teacherDiv);
    });

    // Update the teacher count after displaying teachers
    displayTeacherCount();
}

// Initialize the display
document.addEventListener("DOMContentLoaded", displayTeachers);
