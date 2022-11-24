// Configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
import { clear } from 'console';
import readline from 'readline';
import {
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
} from "./functions.js";



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
      rl.question('*********************\nIntroduce una opción:\n\t', (num) => {
        rl.pause();
        if (isInt(num) && num > 0) {
          num = Number.parseInt(num);
          resolve(num);
        } else {
          reject('Has de introducir una opción entre 1 y 15');
        }
      });
    });
    
    return promise;
  }
  
  
  
  
  //Mostrar menu y elegir una opción
  function showPossibleOptions() {
    console.log('=====================')
    console.log('OPCIONES DISPONIBLES');
    console.log('=====================\n\t')
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
    console.log('15- Ordenar el array de alumnos alfabéticamente según su nombre.\n\t');
  }
  
  async function showOptions() {
     
    let numberFromConsole;
    let menu; 
    do {
       showPossibleOptions();
      try {
          numberFromConsole = await getNumberFromConsole();
        
      } catch (error) {
          console.log(error)
          process.exit(0)
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
          averageAge();
          break;
        case 13:
          averageAgeGirls();
          break;
        case 14:
          addNotes();
          break;
        case 15:
          sortNames();
          break;
        default:
          console.log('Número no válido')
          rl.close();
          break;
      }
      
    }  while (numberFromConsole <= 15)
  }
  
  showOptions();

