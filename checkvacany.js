function displayVacan() {
  const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
  
  const techingVacancy = vacancies.length; // Count the number of vacancies
  document.getElementById("teachvacan").innerHTML = techingVacancy; // Update the heading with the count
  
      const nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];

   const nontechingVacancy = nonTeachingVacancies.length; // Count the number of vacancies
   document.getElementById("nonteachvacan").innerHTML = nontechingVacancy; // Update the heading with the count
     
	 
	  const totalVacancy  = vacancies.length + nonTeachingVacancies.length ;
      document.getElementById("totalvacancy").innerHTML = totalVacancy; // Update the heading with the count

   }
displayVacan();