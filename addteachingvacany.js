document.getElementById("addteachingvacany").addEventListener("click", function() {
  addTeachingVacancy();
});

function addTeachingVacancy() {
  const JobTitle = document.getElementById("JobTitlevacany").value;
  const BlockLocation = document.getElementById("locationvacany").value;
  const Department = document.getElementById("departmentvacany").value;
  const Education = document.getElementById("Educationsvacany").value;
  const Skills = document.getElementById("Skillsvacany").value;
  const Subject = document.getElementById("Subjectvacany").value;
  const TotalExperience = document.getElementById("TotalExperiencesvacany").value;
  const KeyResponsibilities = document.getElementById("KeyResponsibilitiesvacany").value;
  const Requirements = document.getElementById("Requirementsvacany").value;

  const vacancy = {
    JobTitle,
    BlockLocation,
    Department,
    Education,
    Skills,
    Subject,
    TotalExperience,
    KeyResponsibilities,
    Requirements
  };

  let vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
  vacancies.push(vacancy);
  localStorage.setItem("vacancies", JSON.stringify(vacancies));
  clearForm();
  displayVacancies();
}

function displayVacancies() {
  const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
  const displayVacanys = document.getElementById("displayVacanys");
  displayVacanys.innerHTML = "";
  
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
      <td>
        <button onclick="editVacancy(${index})" style="height:30px; width:30px; background-color:blue; border:none; border-radius:10px; color:white;"><i class="las la-pen"></i></button>
        <button onclick="deletevacany(${index})" style="height:30px; width:30px; background-color:red; border:none; border-radius:10px; color:white;"><i class="las la-trash"></i></button>
      </td>
    </tr>`;
    displayVacanys.innerHTML += row;
  });
}

function deletevacany(index) {
  let vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
  vacancies.splice(index, 1);
  localStorage.setItem("vacancies", JSON.stringify(vacancies));
  displayVacancies();
}
// Function to edit a vacancy
function editVacancy(index) {
  const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
  const vacancy = vacancies[index];

  document.querySelector(".container-fluid").style.display = "block"; // Display the form container
  document.getElementById("addteachingvacany").style.display = "none"; // Hide the "Add" button
  document.getElementById("updateteachingvacany").style.display = "inline-block"; // Show the "Update" button

  // Populate the form fields with the selected vacancy data
  document.getElementById("JobTitlevacany").value = vacancy.JobTitle;
  document.getElementById("locationvacany").value = vacancy.BlockLocation;
  document.getElementById("departmentvacany").value = vacancy.Department;
  document.getElementById("Educationsvacany").value = vacancy.Education;
  document.getElementById("Skillsvacany").value = vacancy.Skills;
  document.getElementById("Subjectvacany").value = vacancy.Subject;
  document.getElementById("TotalExperiencesvacany").value = vacancy.TotalExperience;
  document.getElementById("KeyResponsibilitiesvacany").value = vacancy.KeyResponsibilities;
  document.getElementById("Requirementsvacany").value = vacancy.Requirements;

  // Store the vacancy data and index for the update function
  document.getElementById("updateteachingvacany").dataset.index = index;
}

// Function to update a vacancy
function updateteachingvacancy() {
  const index = document.getElementById("updateteachingvacany").dataset.index;
  let vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];

  // Get updated data from the form fields
  const updatedVacancy = {
    JobTitle: document.getElementById("JobTitlevacany").value,
    BlockLocation: document.getElementById("locationvacany").value,
    Department: document.getElementById("departmentvacany").value,
    Education: document.getElementById("Educationsvacany").value,
    Skills: document.getElementById("Skillsvacany").value,
    Subject: document.getElementById("Subjectvacany").value,
    TotalExperience: document.getElementById("TotalExperiencesvacany").value,
    KeyResponsibilities: document.getElementById("KeyResponsibilitiesvacany").value,
    Requirements: document.getElementById("Requirementsvacany").value
  };

  // Update the vacancy data in localStorage
  vacancies[index] = updatedVacancy;
  localStorage.setItem("vacancies", JSON.stringify(vacancies));

  // Re-display the updated list of vacancies and clear the form
  displayVacancies();
  clearForm();

  // Hide the "Update" button and show the "Add" button again
  document.getElementById("addteachingvacany").style.display = "inline-block";
  document.getElementById("updateteachingvacany").style.display = "none";
}

// Function to clear the form after submission or update
function clearForm() {
  document.getElementById("teachingvacanyForm").reset();
}

document.addEventListener("DOMContentLoaded", () => {
  displayVacancies();
});

// Display vacancies on page load
displayVacancies();