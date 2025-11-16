let students = [
        { name: "John Johnson", mark: 11 },
        { name: "Joan Joanson", mark: 10 },
        { name: "John Doe", mark: 8 },
        { name: "Joan Doe", mark: 6 }
    ];

function showStudents() {
    let print = "<ul>";
    students.forEach(s => {
        print += `<li>${s.name}: ${s.mark}</li>`;
    });
    print += "</ul>";
    document.getElementById("info").innerHTML = print;
}

function addStudent() {
    const name = prompt("Enter students name та surname:");
    const mark = +(prompt("Enter students mark:"));

    if (name && !isNaN(mark)) {
        students.push({ name, mark });
        alert("Student added");
    } else {
        alert("Invalid input");
    }
}

function deleteStudent() {
    const name = prompt("Enter students name та surname:");

    const index = students.findIndex(s => s.name.toLowerCase() == name.toLowerCase());

    if (index !== -1) {
        students.splice(index, 1);
        alert("Student deleted");
    } else {
        alert("Student not found");
    }
}

function averageMark() {
    if (students.length == 0) {
        alert("List is empty");
        return;
    }

    const avg = students.reduce((sum, s) => sum + s.mark, 0) / students.length;
    alert("Average group mark: " + avg.toFixed(2));
}