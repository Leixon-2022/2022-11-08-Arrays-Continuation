const arrayOfPersons = [
  createStudent("Sulejman"),
  createStudent("Jonas"),
  createStudent("Anja"),
  createStudent("Patric"),
  createStudent("Michela"),
  createStudent("Simon"),
  createStudent("Joacim"),
  createStudent("Jennifer"),
  createStudent("Mirsada"),
  createStudent("Moneer"),
  createStudent("Olof"),
  createStudent("Erik"),
  createTeacher("Joakim")
]

console.log(arrayOfPersons)

// for - den snabbaste loopen
for (let index = 0; index < arrayOfPersons.length; index++) {
  const element = arrayOfPersons[index];
  console.log('Person::', element)
}

console.log('')
console.log('')

// forof
for (const person of arrayOfPersons) {
  console.log('Person::', person)
}

console.log('')
console.log('')

// forEach - varje element som finns i arrayn
arrayOfPersons.forEach((person, index) => {
   console.log('Person::', person)
   console.log('Index of person', index)
})

console.log('')
console.log('')

// map
arrayOfPersons.map((person, index) => {
   console.log('Person::', person)
   console.log('Index of person', index)
})










function createStudent(name){
  return {
    firstName: name,
    role: "Student",
  }
}

function createTeacher(name){
  return {
    firstName: name,
    role: "Teacher",
  }
}