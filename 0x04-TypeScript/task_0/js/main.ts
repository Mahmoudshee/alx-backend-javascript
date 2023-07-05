interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London",
  },
];

// Render table
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);

