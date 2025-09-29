function displayVacancies() {
  const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
  const checkteachingv = document.getElementById("checkteachingv");
  checkteachingv.innerHTML = "";
    
   const techingVacancy = vacancies.length; // Count the number of vacancies
  document.getElementById("teachvacan").innerHTML = techingVacancy; // Update the heading with the count
  
  
  
      const nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];

   const nontechingVacancy = nonTeachingVacancies.length; // Count the number of vacancies
   document.getElementById("nonteachvacan").innerHTML = nontechingVacancy; // Update the heading with the count
 const totalVacancy  = vacancies.length + nonTeachingVacancies.length ;
      document.getElementById("totalvacancy").innerHTML = totalVacancy; // Update the heading with the count

  vacancies.forEach((vacancy, index) => {
    const row = `<tr>
      <td>${vacancy.JobTitle}</td>
      <td>${vacancy.BlockLocation}</td>
      <td>${vacancy.Department}</td>
      <td>${vacancy.Education}</td>
      <td>${vacancy.Skills}</td>
      <td>${vacancy.Subject}</td>
      <td>${vacancy.TotalExperience}</td>
      <td>${vacancy.KeyResponsibilities}</td>
      <td>${vacancy.Requirements}</td>
      
    </tr>`;
    checkteachingv.innerHTML += row;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  displayVacancies();
});