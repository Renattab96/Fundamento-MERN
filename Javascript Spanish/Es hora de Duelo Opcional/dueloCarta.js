//ESTA ES UNA CARTA MAESTRA DE LA QUE HEREDAN LAS DEMAS CARTAS 
class Card{
    constructor(nombre , costo){
        this.nombre= nombre;
        this.costo= costo;

    }
}
//CARTA UNIDAD
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
        console.log(`El Ninja ${this.nombre} su poder   ${this.poder} resiliencia ${this.resilencia}`)
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
        if (target instanceof Unidad && this.nombre =="Algoritmo Duro "){

            console.log(this.nombre, "Que efecto estoy usando ")
            target.resilencia = target.resilencia + this.magnitud;
            
        }else if(target instanceof Unidad && this.nombre=="Rechazo de Promesa"){
            target.resilencia = target.resilencia + this.magnitud;

        }else if (target instanceof Unidad && this.nombre =="Programacion en Pareja"){
            target.poder = target.poder + this.magnitud;
        }else{
            //throw new Error("El Objetivo debe venir de las Tarjetas");
        }
    }
    
}
//EFECTOS

let Algoritmo_duro= new Efecto("Algoritmo Duro ",
                                2,
                                " Aumentar la resitencia del objetivo en 2",
                                'Resiliencia',
                                4)
let rechazo_de_promesa =new Efecto('Rechazo de Promesa',
                                    1,
                                    "Reducir la resitencia del objetivo en 2",
                                    "resiliencia",
                                    3)
let programacion_pareja = new Efecto ('Programacion en Pareja ',
                                    3,
                                    "Aumentar el poder del objetivo en 2",
                                    "Poder",
                                    3)

    //TURNO 1
    let ninja_cinturon_rojo= new Unidad(" cinturon rojo", 3, 3, 4)
    Algoritmo_duro.play(ninja_cinturon_rojo)
    ninja_cinturon_rojo.mostrar_Informacion()

    //TURNO 2
    let ninja_cinturon_negro= new Unidad(" cinturon negro", 5, 6, 4)
    Algoritmo_duro.play(ninja_cinturon_negro)
    ninja_cinturon_negro.mostrar_Informacion()


    //TURNO 3
    programacion_pareja.play(ninja_cinturon_rojo)
    ninja_cinturon_rojo.mostrar_Informacion()
