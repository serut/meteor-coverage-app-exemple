export class School {
  private _students: Array<School.Student> = [];

  constructor(private _name: string) {}

  enrollStudent(newStudent: School.Student): void {
    let found: boolean = false;
    for (let student of this._students) {
      /* istanbul ignore else */
      if (student.id === newStudent.id) {
        found = true;
        break;
      }
    }
    /* istanbul ignore else */
    if (!found) {
      this._students.push(newStudent);
    }
  }

  getStudentInfo(name: string): School.Student {
    for (let student of this._students) {
      /* istanbul ignore else */
      if (student.name === name) {
        return student;
      }
    }
  }

  getStudentAverage(name: string): number {
    let average: number = -1; // default value to return if student not found
    for (let student of this._students) {
      /* istanbul ignore else */
      if (student.name === name) {
        const grades = Object.keys(student.grades).map(key => student.grades[key]);
        return grades.reduce((prev, current) => prev + current) / grades.length;
      }
    }
    return average;
  }
}
