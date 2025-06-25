class University {
    constructor(universityName){
        this.universityName = universityName;
        this.faculties = [];
    }
    addFaculty(facultyName){
        if(!this.faculties.includes(facultyName)){
            this.faculties.push(facultyName);
            console.log(`${facultyName} добавлен в ${this.universityName}`);
        }else{
            console.log(`${facultyName} уже есть.`);
        }
    }

    deleteFaculty(facultyName){
      let index = this.faculties.indexOf(facultyName);
      if(index !== -1){
        this.faculties.splice(index, 1);
        console.log(`${facultyName} удален из ${this.universityName}`);
      }else{
        console.log(`${facultyName} не существует`);
      }
    }

    displayFaculties(){
        if(this.faculties.length === 0){
            console.log(`В ${this.universityName} нету факультетов.`);
        }else{
            console.log(`Факультеты университета ${this.universityName}:`);
            this.faculties.forEach((faculty, index) => {
                console.log(`${index + 1}. ${faculty}`);
            });
        }
    }
}

const myUniversity = new University("Мой Универ");

myUniversity.addFaculty('ФКСиС');
myUniversity.addFaculty('ФКП');
myUniversity.addFaculty('ФРЭ');
myUniversity.addFaculty('ФКСиС');

myUniversity.displayFaculties();

myUniversity.deleteFaculty('ФКП');
myUniversity.deleteFaculty('ФКУ');

myUniversity.displayFaculties();