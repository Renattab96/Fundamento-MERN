
        class Ninja {
            constructor(nombre,salud){
                this.nombre = nombre;
                this.salud = 10;
                this.fuerza = 3;
                this.velocidad = 3;
            }
            //imprime datos de Nombre del Ninja en este metodo
            sayName(){
                console.log(`Ninja Cinturon Negro ${this.nombre}`);
            }

            showStas(){
                console.log(` 1- nombre es :${this.nombre} \n 2- estado de salud esta en ${this.salud} \n 3- fuerza actual es ${this.fuerza}\n 4- velocidad esta en ${this.velocidad} `
                );
            }

            drinkSake(){
                console.log("Actualizando mi estado de Salud ...");
                this.salud += 10;
                console.log(`Salud Actual: ${this.salud}`);
            }
            
        }
            const ninja1 = new Ninja(" Renatta ", 3);
            ninja1.sayName();
            ninja1.showStas();
            ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.sabiduria= 10;
        this.salud=200;
        this.velocidad= 10 ;
        this.fuerza = 10;
    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        super.drinkSake();
    }
}

        
        const nuevoSensei = new Sensei("Master  Student ");
        nuevoSensei.speakWisdom();
        nuevoSensei.showStas();