interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  contract: false,
};

console.log(teacher);

interface Directors extends Teacher {
  readonly numberOfReports: number;
}

const director: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const fullName = `${firstInitial}. ${lastName}`;
  return fullName;
};

console.log(printTeacher('John', 'Doe'));

interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentClassInterface = class {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());


