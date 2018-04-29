declare namespace School {
  interface Student {
    id: string;
    name: string;
    age?: number;
    sports?: Array<string>;
    grades?: {
      [subject: string]: number;
    };
  }

  interface Instance {
    _name: string;
    _students: Array<Student>;

    new(_name: string);
    enrollStudent(newStudent: School.Student): void;
    getStudentInfo(name: string): School.Student;
    getStudentAverage(name: string): number;
  }
}
