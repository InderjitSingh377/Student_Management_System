// Function to show the add teacher form
function display() {
    document.querySelector(".container").style.display = "block";
    document.getElementById("addButton").style.display = "inline-block";
    document.getElementById("updateButton").style.display = "none";
    clearForm();
}

// Function to add a new teacher
function addTeacher() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const course = document.getElementById("course").value;
    const status = document.getElementById("status").value;

    const imageFile = document.getElementById("teacherImage").files[0];
    const cvFile = document.getElementById("teacherCV").files[0];

    const reader = new FileReader();
    const cvReader = new FileReader();

    reader.onload = function(e) {
        const image = e.target.result;

        // Read the timetable file if it exists
        if (cvFile) {
            cvReader.readAsDataURL(cvFile);
        } else {
            storeTeacherData(image, null);
        }
    };

    cvReader.onload = function(e) {
        const cv = e.target.result;
        storeTeacherData(reader.result, cv);
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else if (cvFile) {
        cvReader.readAsDataURL(cvFile);
    } else {
        storeTeacherData(null, null);
    }

    function storeTeacherData(image, cv) {
        const teacher = {
            firstName,
            lastName,
            email,
            contact,
            address,
            course,
            status,
            image,
            cv, // Store the timetable image data
        };

        let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
        teachers.push(teacher);
        localStorage.setItem("teachers", JSON.stringify(teachers));

        clearForm();
        displayTeachers();
    }
}

// Function to display the list of teachers
function displayTeachers() {
    const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const tableBody1 = document.getElementById("tablebody1");
    tableBody1.innerHTML = "";
const totalTeachers = teachers.length; // Count the number of teachers
  document.getElementById("numbers").innerHTML = totalTeachers; // Update the heading with the count
  
    teachers.forEach((teacher, index) => {
        const row = `<tr>
            <td><img src="${teacher.image}" alt="" style="height:30px; width:30px;cursor:pointer;" onclick="showFullImage('${teacher.image}')" /></td>
            <td>${teacher.firstName} ${teacher.lastName}</td>
            <td>${teacher.contact}</td>
            <td>${teacher.email}</td>
            <td>${teacher.address}</td>
            <td>${teacher.course}</td>
            <td>${teacher.status}</td>
            <td>
                <img src="${teacher.cv}" alt="Timetable Image" style="height:30px; width:30px; cursor:pointer;" onclick="showFullImage('${teacher.cv}')" />
            </td>
            <td>
                <button onclick="editTeacher(${index})" style="height:30px; width:30px; background-color:blue; border:none; border-radius:10px; color:white;"><i class="las la-pen"></i></button>
                <button onclick="deleteTeacher(${index})" style="height:30px; width:30px; background-color:red; border:none; border-radius:10px; color:white;"><i class="las la-trash"></i></button>
            </td>
        </tr>`;
        tableBody1.innerHTML += row;
    });
}

// Function to delete a teacher record
function deleteTeacher(index) {
    let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    teachers.splice(index, 1);
    localStorage.setItem("teachers", JSON.stringify(teachers));
    displayTeachers();
}

// Function to edit a teacher record
function editTeacher(index) {
    let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const teacher = teachers[index];

    document.querySelector(".container").style.display = "block";
    document.getElementById("addButton").style.display = "none";
    document.getElementById("updateButton").style.display = "inline-block";

    // Fill the form fields with the existing teacher data
    document.getElementById("firstName").value = teacher.firstName;
    document.getElementById("lastName").value = teacher.lastName;
    document.getElementById("email").value = teacher.email;
    document.getElementById("contact").value = teacher.contact;
    document.getElementById("address").value = teacher.address;
    document.getElementById("course").value = teacher.course;
    document.getElementById("status").value = teacher.status;

    // Store the index in a hidden field or as a global variable for later use in the update function
    document.getElementById("updateButton").dataset.index = index;
}

// Function to update a teacher record
function updateTeacher() {
    const index = document.getElementById("updateButton").dataset.index;
    let teachers = JSON.parse(localStorage.getItem("teachers")) || [];

    const updatedTeacher = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value,
        course: document.getElementById("course").value,
        status: document.getElementById("status").value,
        image: teachers[index].image, // Keep the existing image
        cv: teachers[index].cv // Keep the existing CV
    };

    // If new image is uploaded, replace the old one
    const imageFile = document.getElementById("teacherImage").files[0];
    const cvFile = document.getElementById("teacherCV").files[0];

    const reader = new FileReader();
    const cvReader = new FileReader();

    reader.onload = function(e) {
        updatedTeacher.image = e.target.result;

        if (cvFile) {
            cvReader.readAsDataURL(cvFile);
        } else {
            saveUpdatedTeacher();
        }
    };

    cvReader.onload = function(e) {
        updatedTeacher.cv = e.target.result;
        saveUpdatedTeacher();
    };

    function saveUpdatedTeacher() {
        teachers[index] = updatedTeacher;
        localStorage.setItem("teachers", JSON.stringify(teachers));
        displayTeachers();
        clearForm();
    }

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else if (cvFile) {
        cvReader.readAsDataURL(cvFile);
    } else {
        saveUpdatedTeacher();
    }
}

// Function to show the full timetable image in a modal
function showFullImage(imageUrl) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000"; // Ensure the modal appears on top

    const img = document.createElement("img");
    img.src = imageUrl;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.objectFit = "contain"; // Ensure the image fits within the modal

    modal.appendChild(img);
    document.body.appendChild(modal);

    modal.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}
function validateContactNumber() {
  var contact = document.getElementById("contact");
  var inputValue = contact.value;

  // Remove non-numeric characters
  inputValue = inputValue.replace(/[^0-9]/g, '');

  // Limit input to 10 digits
  if (inputValue.length > 10) {
    inputValue = inputValue.substring(0, 10);
  }

  contact.value = inputValue;
}
function clearForm() {
    document.getElementById("teacherForm").reset();
}

document.addEventListener("DOMContentLoaded", () => {
    displayTeachers();
});
