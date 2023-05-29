import { useState } from "react"

export default function Checkbox(props){
 const [state, setState] = useState(props.initialState)

   
 function modificarEstado(){
        setState(previousState => !previousState)
    }
 
 return(
        <div>
            <p>{state ? "Ativo" : "Inativo"}</p>
            <button onClick={modificarEstado}>botão</button>
        </div>
    )
}