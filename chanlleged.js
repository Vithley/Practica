/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'Edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'Silvia'
  }
  ]
  
const availableMaleNames = ['Edu', 'Pepe', 'Juan', 'Victor', 'Leo', 'Francisco', 'Carlos'];
const availableFemaleNames = ['Cecilia', 'Ana', 'Luisa', 'Silvia', 'Isabel', 'Virginia'];
const availableGenders = ['male', 'female'];
  
export{
  availableFemaleNames,
  availableMaleNames,
  availableGenders, 
  students
};







