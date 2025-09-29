

function displayVacancies() {
    const nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];
	const displaynonvacancy = document.getElementById("displaynonvacancy"); // Use the correct ID
    displaynonvacancy.innerHTML = "";
	
	 const nontechingVacancy = nonTeachingVacancies.length; // Count the number of vacancies
   document.getElementById("nonteachvacan").innerHTML = nontechingVacancy; // Update the heading with the count
    
	  const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];

   
   const techingVacancy = vacancies.length; // Count the number of vacancies
  document.getElementById("teachvacan").innerHTML = techingVacancy; // Update the heading with the count
  
  const totalVacancy  = vacancies.length + nonTeachingVacancies.length ;
      document.getElementById("totalvacancy").innerHTML = totalVacancy; // Update the heading with the count


    nonTeachingVacancies.forEach((vacancy, index) => {
        const row = `<tr>
            <td>${vacancy.jobTitle}</td>
            <td>${vacancy.blockLocation}</td>
            <td>${vacancy.department}</td>
            <td>${vacancy.education}</td>
            <td>${vacancy.skills}</td>
            <td>${vacancy.totalExperience}</td>
            <td>${vacancy.keyResponsibilities}</td>
            <td>${vacancy.requirements}</td>
            
        </tr>`;
        displaynonvacancy.innerHTML += row;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  displayVacancies();
});