class Card{
    constructor(nombre , costo){
        this.nombre= nombre;
        this.costo= costo;

    }
}
class Unidad extends Card{
    constructor(nombre, costo, poder ,resilencia ){
        super(nombre,costo);
        this.poder= poder;
        this.resilencia= resilencia;
    }

//Clase maestra de la que hereda las demas clases
    // atacar(target){
    //     if(target instanceof Unidad )
    // }
    mostrar_Informacion(){
        console.log(`El Ninja es  ${this.nombre} y tiene ${this.poder}`)
    }
}

class Efecto extends Card{
    constructor ( nombre, costo, texto,stat,magnitud){
    super(nombre,costo);
    this.texto= texto;
    this.stat= stat;
    this.magnitud =magnitud;
    }
    play(target){
        if (target instanceof  Unidad ){
            // console.log("que es el target ")
            console.log(target.resilencia, "Que es target")
            target.resilencia = target.resilencia + this.magnitud

        }else{
            throw new Error("EL OBJETIVO DEBE VENIR DE LA UNIDAD ");
        }
    }
    
}
//Efectos

let Algoritmo_duro= new Efecto("",2,"")
let rechazo_de_promesa =new Efecto("",3,"")
let programacion_pareja = new Efecto("",4,"")
//turno 1
 let ninja_cinturon_rojo= new Unidad("Ninja cinturon rojo", 3, 3, 4)
  ninja_cinturon_rojo.mostrar_Informacion()
  Algoritmo_duro.play(ninja_cinturon_rojo)
 //turno 2
 let ninja_cinturon_negro= new Unidad("Ninja cinturon negro", 5, 6, 4)
 ninja_cinturon_negro.mostrar_Informacion()
  Algoritmo_duro.play(ninja_cinturon_negro)
//  console.log(this.nombre)
