document.getElementById("addnonteachingvacan").addEventListener("click", function() {
    addNonTeachingVacancy();
});

function addNonTeachingVacancy() {
    const jobTitle = document.getElementById("JobTitles").value;
    const blockLocation = document.getElementById("locations").value;
    const department = document.getElementById("departments").value;
    const education = document.getElementById("Education").value;
    const skills = document.getElementById("Skillss").value;
    const totalExperience = document.getElementById("TotalExperiences").value;
    const keyResponsibilities = document.getElementById("KeyResponsibilities").value;
    const requirements = document.getElementById("Requirement").value;

    const vacancy = {
        jobTitle,
        blockLocation,
        department,
        education,
        skills,
        totalExperience,
        keyResponsibilities,
        requirements
    };

    let nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];
    nonTeachingVacancies.push(vacancy);
    localStorage.setItem("nonTeachingVacancies", JSON.stringify(nonTeachingVacancies));
    clearForm();
    displayVacancies();
}

function displayVacancies() {
    const nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];
    const displayNonVacancy = document.getElementById("displaynonvacany");
    displayNonVacancy.innerHTML = "";

    const nontechingVacancy = nonTeachingVacancies.length;
    document.getElementById("nonteachvacan").innerHTML = nontechingVacancy;

    const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
    const techingVacancy = vacancies.length;
    document.getElementById("teachvacan").innerHTML = techingVacancy;

    const totalVacancy = vacancies.length + nonTeachingVacancies.length;
    document.getElementById("totalvacancy").innerHTML = totalVacancy;

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
            <td>
                <button onclick="editVacancy(${index})" style="height:30px; width:30px; background-color:blue; border:none; border-radius:10px; color:white;"><i class="las la-pen"></i></button>
                <button onclick="deleteVacancy(${index})" class="btn btn-danger btn-sm"><i class="las la-trash"></i></button>
            </td>
        </tr>`;
        displayNonVacancy.innerHTML += row;
    });
}

function deleteVacancy(index) {
    let nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];
    nonTeachingVacancies.splice(index, 1);
    localStorage.setItem("nonTeachingVacancies", JSON.stringify(nonTeachingVacancies));
    displayVacancies();
}

function editVacancy(index) {
    const nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];
    const vacancy = nonTeachingVacancies[index];

    document.querySelector(".container-fluid").style.display = "block";

    document.getElementById("addnonteachingvacan").style.display = "none";
    document.getElementById("updatenonteachingvacan").style.display = "inline-block";

    document.getElementById("JobTitles").value = vacancy.jobTitle;
    document.getElementById("locations").value = vacancy.blockLocation;
    document.getElementById("departments").value = vacancy.department;
    document.getElementById("Education").value = vacancy.education;
    document.getElementById("Skillss").value = vacancy.skills;
    document.getElementById("TotalExperiences").value = vacancy.totalExperience;
    document.getElementById("KeyResponsibilities").value = vacancy.keyResponsibilities;
    document.getElementById("Requirement").value = vacancy.requirements;

    document.getElementById("updatenonteachingvacan").dataset.index = index;
}

function updateVacancy() {
    const index = document.getElementById("updatenonteachingvacan").dataset.index;
    let nonTeachingVacancies = JSON.parse(localStorage.getItem("nonTeachingVacancies")) || [];

    const updatedVacancy = {
        jobTitle: document.getElementById("JobTitles").value,
        blockLocation: document.getElementById("locations").value,
        department: document.getElementById("departments").value,
        education: document.getElementById("Education").value,
        skills: document.getElementById("Skillss").value,
        totalExperience: document.getElementById("TotalExperiences").value,
        keyResponsibilities: document.getElementById("KeyResponsibilities").value,
        requirements: document.getElementById("Requirement").value
    };

    nonTeachingVacancies[index] = updatedVacancy;
    localStorage.setItem("nonTeachingVacancies", JSON.stringify(nonTeachingVacancies));

    displayVacancies();
    clearForm();

    document.getElementById("addnonteachingvacan").style.display = "inline-block";
    document.getElementById("updatenonteachingvacan").style.display = "none";
}


// Function to clear the form after submission or update
function clearForm() {
  document.getElementById("nonteachingvacany").reset();
}

document.addEventListener("DOMContentLoaded", () => {
  displayVacancies();
});

// Display vacancies on page load
displayVacancies();