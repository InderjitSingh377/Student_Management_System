function displayTeachers() {
  const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
  const studentTableBody = document.getElementById("studentTableBody");
  studentTableBody.innerHTML = "";
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
    </tr>`;
    studentTableBody.innerHTML += row;
  });
}



function showFullImage(imageUrl) {
  // ... (same as in teacher.js)
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



document.addEventListener("DOMContentLoaded", () => {
  displayTeachers();
});