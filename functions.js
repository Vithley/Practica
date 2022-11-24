import {
    availableFemaleNames,
    availableMaleNames,
    availableGenders, 
    students
} from "./chanlleged.js"

// 1.Mostrar todos los alumnos en una tabla
const showTables = () => {
    console.table(students);
  }
  
// 2.Mostrar el total de alumnos que hay en la clase
const numberOfStudents= () => {
let numStudents = students.length;
console.log(`El número de alumnos que hay en la clase es ${numStudents}.`)
}

// 3.Mostrar todos los nombres de los alumnos
const nameOfStudents = () => {
let nameStudents = students.map(function(students) {
    return students.name;
});
console.table(nameStudents);

}

// 4.Eliminar el último alumno de la clase
const deleteLastStudent = () => {
console.table(students.pop());
console.log(`Has eliminado al último usuario de la lista`);
}

// 5.Eliminar un alumno aleatorio
const ramdomStudent = () => {
while(students.length) {
    const random = Math.floor(Math.random() * students.length);
    const el = students.splice(random, 1)[0];
    console.log(el);
}

}

// 6.Mostrar todos los alumnos que son chicas
const femaleStudents = () => {
let femaleStudent = students.filter(function(el) {
    return(el.gender === 'female')
});
console.log(femaleStudent);
}

// 7.Mostrar por consola el número de chicos y chicas que hay en la clase.
const numGenderStudents = () => {
const females = students.filter(person => person.gender === 'female');
const males = students.filter(person => person.gender === 'male');
let totalFemales = females.length;
let totalMale = males.length;
console.log(`El numero de chicos es ${totalMale}\nEl número total de chicas es ${totalFemales}`);


}

// 8. Mostrar true o false por consola si todos los alumnos de la clase son chicas.
const femaleStudentsTrue = () => {
const allFemales = students.every(student => student.gender === 'female');
console.log(allFemales);

}
// 9. Mostrar los alumnos que que tengan entre 20 y 25 años
const ageRangeStudents = () => {
let rangeStudent = students.filter(function(el) {
    return(el.age >= 20 && el.age <= 25)
});
console.table(rangeStudent);
}

// Creo una función para calcular la edad entre 20 y 50
function numeroAleatorio(min, max) {
return Math.round(Math.random() * (max - min) + min);
}

// 10.Añadir un alumno nuevo con datos
const addDatas = () => {
let randomName;
let randomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
if(randomGender === 'female'){
    randomName = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)];
}else {
    randomName = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
}
let randomAge = numeroAleatorio(20,50);
let newItem = {
            "age": randomAge, 
            "gender": randomGender,
            "examScores": [],
            "name": randomName 
            };
students.push(newItem);
console.log(newItem);    
}

// 11. Mostrar el nombre de la persona más joven.
const youngestStudent = () => {
const lowest = students.reduce((previous, current) => {
    return current.age < previous.age ? current : previous;
});

console.log('El estudante mas jovén es: ', lowest);
}

// 12. Mostrar la edad media de los alumnos
const averageAge = () => {
const average = students.reduce((total, next) => total + next.age, 0) / students.length;
console.log('La edad media de los estudiantes es:', Math.round(average));
}

// 13. Mostrar la edad media de todas las chicas de la clase
const averageAgeGirls = () => {
const females = students.filter(girls => girls.gender === 'female');
const average = females.reduce((total, next) => total + next.age, 0) / females.length;

console.log('La edad media de las chicas de la clase es:', Math.round(average));
}

// 14. Añadir nueva nota a los alumnos
const addNotes = () => {
    const note = students;
    for(let i = 0; i < note.length; i++) {
        note[i].examScores.push(Math.floor(Math.random() * 10));
    }
    console.log(note);
}

// 15. Ordenar los alumnos alfabéticamente
const sortNames = () => {
const names = students.sort(function(a, b){
    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    if (nameA < nameB) //sort string ascending
    return -1;
    if (nameA > nameB)
    return 1;
    return 0; //default return value (no sorting)
    });
    console.log(names);
}

export {
    showTables,
    numberOfStudents,
    nameOfStudents,
    deleteLastStudent,
    ramdomStudent,
    femaleStudents,
    numGenderStudents,
    femaleStudentsTrue,
    ageRangeStudents,
    addDatas,
    youngestStudent, 
    averageAge,
    averageAgeGirls,
    addNotes, 
    sortNames
};