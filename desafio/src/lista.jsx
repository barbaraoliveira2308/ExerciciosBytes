import { useState } from "react";
export default function app() {
    return(
<div className="app">
    <polaroideFrame color= "red"/>
</div>
);
}



function polaroideFrame ({color}) {

    return(
     <div classname="wrapper">
         <div className=" inner" style={{backgroundColor: color}}></div>
         </div>
         

         );
     }
 