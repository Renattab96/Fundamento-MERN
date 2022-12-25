class Ninja {
    constructor(nombre,salud){
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = 3;
        this.velocidad = 3;
    }
    //imprime datos de Nombre del Ninja en este metodo
    sayName(){
        console.log(`Mi Nombre es ${this.nombre}`);
    }

    showStas(){
        console.log(`*nombre es :${this.nombre} \n
                    * estado de salud esta en ${this.salud} \n
                    * fuerza actual es ${this.fuerza}\n
                    * velocidad esta en ${this.velocidad}`
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





