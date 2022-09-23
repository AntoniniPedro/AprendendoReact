import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function TituloPrincipal(props){
  const [titulo, setTitulo] = useState(props.titulo ?? "Ola mundo");


  useEffect(() => {
    console.log("titulo mudou");
  },[]);

  function clickCallBack(event){
    alert("Obrigado por clicar")
  }
  
  function handleChangeTitle(event){
    setTitulo(event.target.value);
  }

  return (
    <>
      <h1 onClick={clickCallBack}>{titulo}</h1>

      <input type="text" onChange={handleChangeTitle}/>

    </>
  )
}

export default TituloPrincipal;