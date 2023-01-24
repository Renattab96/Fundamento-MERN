
import React,{useState} from "react";

const Activity =()=>{
     const textStyle ={
        textdecoration :'line-trough',

     };
     const [lista,setLista]=useState([])
     const[input,setImput]=useState([])
     const [CheckedBoxes,setCheckedboxes] = useState([]);

     const agregarTarea =(tarea)=>{
        const nuevaTarea ={
            id:Math.random(),
            tarea:tarea
        }
        setLista([...lista,nuevaTarea])
        setImput("");
     }
     const checkeds=(index,value)=>{
        let copy = CheckedBoxes;
        if(value){
            copy.push(index);
        }else{
            copy= copy.filter(item=>item !== index)
        }

        setCheckedboxes([...copy]);
        console.log(copy);
     }

     const eliminarelemento =(id)=>{
        const nuevaTarea =lista.filter((tarea)=> tarea.id !== id);
        setLista(nuevaTarea);
     }
    return(
    <div>
        <ul>
            <h5>Actividades</h5>
              <input type="text"  value={input} className="form-control" onChange={(e)=>setImput(e.target.value)} />
              <button  className="btn btn-warning" type="button" value={input} onClick={()=>agregarTarea(input)}> Agregar a lista</button>
        </ul>
        <ul>
            {lista.map((tarea)=>(
                <li key={tarea.id}>                 
                    <label style={
                    CheckedBoxes.includes(tarea.id)?
                    textStyle:null
                    }>{tarea.tarea}</label>
                    <input type="checkbox" onChange={(e)=>checkeds(tarea.id, e.target.checked)}className="mt-2"/>
                    <button  onClick ={()=>eliminarelemento(tarea.id)} className="btn btn-danger" >Sacar de Lista  </button>
                </li>
             ))
                }
         
        </ul>

    </div>
    );
}


export default Activity;