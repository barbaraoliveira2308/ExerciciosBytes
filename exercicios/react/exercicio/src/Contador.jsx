import { useState } from "react";

export default function Contador(props){
    const [state, setState] = useState(0)
function incrementar(){
 setState(previousState => ++previousState)
}
function decrementar(){
    setState(previousState => --previousState)
}
return (
    <div role={"main"}>
        <p>
            {state}
        </p>
        <button onClick={incrementar}>+</button>
        <button disabled={state <= 0 ? true : false} onClick={decrementar}>-</button>
    </div>
)
}
