export var School = (function () {
    function School(_name) {
        this._name = _name;
        this._students = [];
    }
    School.prototype.enrollStudent = function (newStudent) {
        var found = false;
        for (var _i = 0, _a = this._students; _i < _a.length; _i++) {
            var student = _a[_i];
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
    };
    School.prototype.getStudentInfo = function (name) {
        for (var _i = 0, _a = this._students; _i < _a.length; _i++) {
            var student = _a[_i];
            /* istanbul ignore else */
            if (student.name === name) {
                return student;
            }
        }
    };
    School.prototype.getStudentAverage = function (name) {
        var average = -1; // default value to return if student not found
        var _loop_1 = function(student) {
            /* istanbul ignore else */
            if (student.name === name) {
                var grades = Object.keys(student.grades).map(function (key) { return student.grades[key]; });
                return { value: grades.reduce(function (prev, current) { return prev + current; }) / grades.length };
            }
        };
        for (var _i = 0, _a = this._students; _i < _a.length; _i++) {
            var student = _a[_i];
            var state_1 = _loop_1(student);
            if (typeof state_1 === "object") return state_1.value;
        }
        return average;
    };
    return School;
}());
//# sourceMappingURL=school.js.map