const arrayOfPersons = [
  // 0
  {
    firstName: "Sulejman",
    role: "Student",
  },
  // 1
  {
    firstName: "Jonas",
    role: "Student",
  },
  // 2
  {
    firstName: "Anja",
    role: "Student",
  },
  // 3
  {
    firstName: "Patric",
    role: "Student",
  },
  // 4
  {
    firstName: "Michela",
    role: "Student",
  },
  // 5
  {
    firstName: "Simon",
    role: "Student",
  },
  // 6
  {
    firstName: "Joacim",
    role: "Student",
  },
  // 7
  {
    firstName: "Jennifer",
    role: "Student",
  },
  // 8
  {
    firstName: "Mirsada",
    role: "Student",
  },
  {
    firstName: "Moneer",
    role: "Student",
  },
  {
    firstName: "Olof",
    role: "Student",
  },
  {
    firstName: "Erik",
    role: "Student",
  },
]

console.log('arrayOfPersons inital Length:: ', arrayOfPersons.length)

// Push - säger åt att putta in x-antal element som anges
arrayOfPersons.push(
  {
    firstName: "Joakim",
    role: "Teacher"
  },
)

console.log('arrayOfPersons with Teacher added Length:: ', arrayOfPersons.length)

// console.log('arrayOfPersons with Teacher added:: ', arrayOfPersons)

// indexet av - alltså hämta ut specifik
const group1 = [arrayOfPersons[0], arrayOfPersons[1], arrayOfPersons[2]]
const group2 = [arrayOfPersons[6], arrayOfPersons[8], arrayOfPersons[9]]
console.log('group1:: ', group1)
console.log('group2:: ', group2)

// pop - tar väck sista elementet
group1.pop()
group2.pop()
console.log('group1:: ', group1)
console.log('group2:: ', group2)

// concat - slå ihop en array med en annan
const concatGroup = group1.concat(group2)
console.log('concatGroup group:: ', concatGroup)

// reverse
concatGroup.reverse()
console.log('concatGroup reverse:: ', concatGroup)

// splice - splice(start: number, deleteCount?: number)
// const arr2 = arrayOfPersons.splice(0, 4)
// console.log('arr2:: ', arr2)
// console.log('arrayOfPersons:: ', arrayOfPersons)


console.log('')
console.log('')
// slice - slice(start?: number, end?: number):
// exclusive eller inclusive
// let startIndex = 0
// let endIndex = 3
// const group1WithSlice = arrayOfPersons.slice(startIndex, endIndex)
const group1WithSlice = arrayOfPersons.slice(0, 3) //0, 1, 2  (end är exclusive så tänkt end = 3-1)
const group2WithSlice = arrayOfPersons.slice(3, 6) //3, 4, 5  (end är exclusive så tänkt end = 6-1)
const group3WithSlice = arrayOfPersons.slice(6, 9) //6, 7, 8  (end är exclusive så tänkt end = 9-1)
console.log('group1WithSlice', group1WithSlice)
console.log('group2WithSlice', group2WithSlice)
console.log('group3WithSlice', group3WithSlice)
