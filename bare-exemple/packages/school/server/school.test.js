import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

describe('TypeScript school package', function () {
  it('creates empty Hogwarts', function () {
    let name = 'Hogwarts School of Witchcraft and Wizardry';
    let hogwarts = new School(name);
    hogwarts.should.have.property('_name').that.is.an('string').and.equals(name);
    hogwarts.should.have.property('_students').that.is.an('array').and.deep.equals([]);
    hogwarts.should.respondTo('enrollStudent');
    hogwarts.should.respondTo('getStudentInfo');
    hogwarts.should.respondTo('getStudentAverage');
  });
  it('enrolls Harry Potter', function () {
    let name = 'Hogwarts School of Witchcraft and Wizardry';
    let newStudent = {
      id: 6824,
      name: 'Harry Potter',
      age: 12,
      sports: ['Quidditch'],
      grades: {
        'charms': 5,
        'defence againts the dark arts': 8,
        'potions': 10,
        'transfiguration': 0
      }
    };

    let hogwarts = new School(name);

    // enrollment
    const enrollStudent = sinon.spy(hogwarts, 'enrollStudent');
    hogwarts.enrollStudent(newStudent);
    hogwarts.enrollStudent(newStudent);

    // assertions
    enrollStudent.should.have.been.calledTwice.and.returned(undefined);
    hogwarts._students.length.should.equal(1);
    hogwarts.should.respondTo('getStudentInfo');
    hogwarts.getStudentInfo('Harry Potter').should.deep.equal(newStudent);
  });
});
