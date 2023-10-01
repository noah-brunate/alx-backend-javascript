export default class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('length must be an intenger');
    if (!Array.isArray(students)) throw new TypeError('students must be an array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('name must be a string');
    this._name = val;
  }

  get lenght() {
    return this._length;
  }

  set length(val) {
    if (!Number.isIntenger(val)) throw new TypeError('length must be an integer');
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Arrar.isArray(val)) throw new TypeError('students mst be an array');
    this._students = val;
  }
}
