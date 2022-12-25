
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
            drinkSake(){
                console.log("Actualizando mi estado de Salud ...");
                this.salud += 10;
                console.log(`Salud Actual: ${this.salud}`);
            }
            showStas(){
                console.log(`1- Nombre del Ninja es:${this.nombre} \n2- Datos de Salud: ${this.salud} \n3- Datos de Fuerza: ${this.fuerza}\n4- Datos de Velocidad: ${this.velocidad} `
                );
            }
            

           
            
        }
            const ninja1 = new Ninja(" Renatta Benitez ,\n Dojo Prueba  ", 3);
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

        
        const nuevoSensei = new Sensei(" Renatta Benitez ,");
        nuevoSensei.speakWisdom();
        nuevoSensei.showStas();