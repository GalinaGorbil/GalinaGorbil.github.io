
$(function () {
  var Human = {
     age: 27,
     name: 'Sergii',
     weight: '83',
     city: 'Kyiv'
    };
  var worker = {
     jod: 'driver',
     salary: '1000'
    };
  var student = {
      Universaty: 'Oxford',
      course: '2'
      };
  worker.__proto__ = Human;
  student.__proto__ = Human;
  console.log('student name:', student.name);
  console.log('worker age:', worker.age);
});
