/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/
import { count } from 'console';
import readline from 'readline';




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
  },
  {
    age: 23,
    examScores: [],
    gender: 'female',
    name: 'Lola'
  },
  {
    age: 27,
    examScores: [],
    gender: 'male',
    name: 'Marcos'
  },
  {
    age: 28,
    examScores: [],
    gender: 'male',
    name: 'Manuel'
  },
  {
    age: 33,
    examScores: [],
    gender: 'male',
    name: 'Luca'
  },
  {
    age: 31,
    examScores: [],
    gender: 'female',
    name: 'Ana'
  },
  {
    age: 33,
    examScores: [],
    gender: 'female',
    name: 'Irene'
  },
  {
    age: 34,
    examScores: [],
    gender: 'female',
    name: 'Alba'
  },
  {
    age: 26,
    examScores: [],
    gender: 'male',
    name: 'Oliver'
  },
  {
    age: 24,
    examScores: [],
    gender: 'male',
    name: 'Luis'
  },
  {
    age: 22,
    examScores: [],
    gender: 'female',
    name: 'Carmen'
  },
  ]
  
const availableMaleNames = ['Edu', 'Pepe', 'Juan', 'Victor', 'Leo', 'Francisco', 'Carlos'];
const availableFemaleNames = ['Cecilia', 'Ana', 'Luisa', 'Silvia', 'Isabel', 'Virginia'];
const availableGenders = ['male', 'female'];
  

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Convertir el dato que metemos por consola a un entero
const isInt= (str) => {
  const integer = parseInt(str);
  if (Number.isNaN(integer)) {
      return false; 
  } else {
      return true;
  }
}

//Pedir un número por consola y comprobar que sea un número
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => { 
          rl.question('Introduce el número: ', (num) => {
              rl.pause();
              if (isInt(num)) {
                  num = Number.parseInt(num);
                  resolve(num);
                  
              } else {
                  reject('Has de introducir un número');
              }
          });
  });
  
  return promise;
}

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
  console.log(`Has eliminado al último usuario de la lista`)
}

// 5.Eliminar un alumno aleatorio
const ramdomStudent = () => {
  
}

// 6.Mostrar todos los alumnos que son chicas
const femaleStudents = () => {
  let femaleStudent = students.filter(function(el) {
    return(el.gender === 'female')
  });
  console.table(femaleStudent);
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

// 10.Añadir un alumno nuevo con datos
const addDatas = () => {
  let nameMaleAlt = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
  let nameFemaleAlt = availableFemaleNames[Math.floor(Math.random() * availableMaleNames.length)];
  let availableGenders = availableFemaleNames[Math.floor(Math.random() * availableMaleNames.length)];

  

  console.log(`El nombre introducido aleatoriamente es ${}`);
      
}



// 11. Mostrar el nombre de la persona más joven.
const youngestStudent = () => {

}

//Mostrar menu y elegir una opción
async function showPossibleOptions() {
  console.log('1- Mostrar en formato de tabla todos los alumnos.');
  console.log('2- Mostrar por consola la cantidad de alumnos que hay en clase.');
  console.log('3- Mostrar por consola todos los nombres de los alumnos.');
  console.log('4- Eliminar el último alumno de la clase.');
  console.log('5- Eliminar un alumno aleatoriamente de la clase.');
  console.log('6- Mostrar por consola todos los datos de los alumnos que son chicas.');
  console.log('7- Mostrar por consola el número de chicos y chicas que hay en la clase.');
  console.log('8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.');
  console.log('9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.');
  console.log('10- Añadir un alumno nuevo con los siguientes datos:\n - Nombre aleatorio\n - Edad aleatoria entre 20 y 50 años\n - Género aleatorio\n - Listado de calificaciones vacío.');
  console.log('11- Mostrar por consola el nombre de la persona más joven de la clase.');
  console.log('12- Mostrar por consola la edad media de todos los alumnos de la clase.');
  console.log('13- Mostrar por consola la edad media de las chicas de la clase.');
  console.log('14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.');
  console.log('15- Ordenar el array de alumnos alfabéticamente según su nombre.');

  let numberFromConsole; 
  do {
    try {
        numberFromConsole = await getNumberFromConsole()
    } catch (error) {
        console.log(error)
        process.exit(0)
    }

    if(numberFromConsole === 0) {
      rl.close()
      console.log('Número incorrecto! Debe de ser un número entre 1 y 15')
    }

    switch(numberFromConsole) {
      case 1:
        showTables();
        break;
      case 2:
        numberOfStudents();
        break;
      case 3:
        nameOfStudents();
        break;
      case 4:
        deleteLastStudent();
        break;
      case 5:
        ramdomStudent();
        break;
      case 6:
        femaleStudents();
        break;
      case 7:
        numGenderStudents();
        break;
      case 8:
        femaleStudentsTrue();
        break;
      case 9:
        ageRangeStudents();
        break;
      case 10:
        addDatas();
        break;
      case 11:
        youngestStudent();
        break;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        break;
      default:
        console.log('Número no válido')
        break;
    }
    
  }  while (numberFromConsole <= 15)
}

showPossibleOptions();






