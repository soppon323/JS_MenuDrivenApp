class Ward {
    constructor(name) {
        this.name = name; 
        this.Patients = [];
    }
    
    addPatient(patient) {
        if (patient instanceof Patient) {
            this.patients.push(patient);
        } else {
            throw new Error(`You can only add an instance of Patient. Argument is not a Patient: ${Patient}`);
        }
    }
    
    describe() { 
            return `${this.name} has ${this.Patients.length} Patients.`;
        }
    }

class Patient {
    constructor(name,age,sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    
    describe() {
        return `${this.name} is a Patient of Benedict Sloane Hospital`;
    }
} 
    


class Menu {
    constructor() {
        this.wards = [];
        this.selectedWard = null;
    }
    
    start () {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createWard();
                    break;
                case '2':
                    this.viewWard();
                    break;
                case '3':
                    this.displayWards();
                    break; 
                case '4':
                    this.deleteWard();
                    break;
                default: 
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
            }
    
            alert("Goodbye! You've been logged out");
        }
    
        showMainMenuOptions() { 
            return prompt(`
            0) Exit 
            1) Create new Ward
            2) View ward
            3) Display all wards
            4) Delete ward 
            `); 
        }

    showWardMenuOptions(wardInfo) {
        return prompt(`
            0) Back
            1) Create Patient
            2) Delete Patient
            --------------------
            ${wardInfo}
         `);
    }
     
        displayWards() {
            let wardString = '';
            for (let i = 0; i < this.wards.length; i++) {
                wardString += i + ') ' + this.wards[i].name + '\n'; 
            }
            alert(wardString);
        }
    
        createWard() {
            let name = prompt ('Enter name for new ward. E.g., "Covid Ward, ICU ..."');
            this.wards.push(new Ward(name));
        } 
    
        viewWard() {
            let index = prompt('Enter the index of the ward you wish to view:');
            if (index > -1 && index < this.wards.length) {
                this.selectedWard = this.wards[index];
                let description = 'ward name: ' + this.selectedWard.name + '\n';
                
                for (let i = 0; i < this.selectedWard.Patients.length; i++) {
                    description += i + ') ' + this.selectedWard.Patients[i].name + " - (" + this.selectedWard.Patients[i].age + ") - " + this.selectedWard.Patients[i].sex + '\n';
                }
    
        let selection = this.showWardMenuOptions(description);
        switch (selection) {
            case '1': 
                this.createPatient();
                break; 
            case '2': 
                this.deletePatient();
          }
        }
    }

    deleteWard() {
        let index = prompt('Enter the index of the ward you wish to delete:');
        if (index > -1 && index < this.wards.length) {
            this.wards.splice(index,1);
        }
    }

    createPatient() {
        let name = prompt('enter name for new Patient');
        let age = prompt('enter age for new Patient');
        let sex = prompt('enter a sex for new Patient, Male or Female:');

        this.selectedWard.Patients.push(new Patient(name,age,sex))
        
    }

    deletePatient() {
        let index = prompt('Enter the index of the Patient you want to delete:');
        if (index > -1 && index < this.selectedWard.Patients.length) {
         this.selectedWard.Patients.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();


    
