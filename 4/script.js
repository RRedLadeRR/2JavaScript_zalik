let students = {
    "John Johnson": 11,
    "Joan Joanson": 10,
    "John Doe": 10,
    "Joan Doe": 11,
};

function showStudents() {
    let info = "";
    for (let name in students) {
        info += `${name}: ${students[name]}\n`;
    }
    document.getElementById("info").innerText = info || "List is empty";
}

function addStudent() {
    let name = prompt("Enter students name та surname:");
    if (!name) return;

    let mark = prompt("Введіть середній бал:");
    mark = Number(mark);

    if (isNaN(mark) || mark < 0 || mark > 12) {
        alert("Invalid number");
        return;
    }

    students[name] = mark;
    alert("Student added");
}

function deleteStudent() {
    let name = prompt("Enter students name та surname:");
    if (!name) return;

    if (students[name] !== undefined) {
        delete students[name];
        alert("Student deleted");
    } else {
        alert("Student not found");
    }
}

function averageMark() {
    let sum = 0;
    let count = 0;

    for (let name in students) {
        sum += students[name];
        count++;
    }

    if (count == 0) {
        document.getElementById("info").innerText = "List is empty";
        return;
    }

    let avg = (sum / count).toFixed(2);
    document.getElementById("info").innerText = `Average mark: ${avg}`;
}