import Button from "./Eventobutton/Button";

function evento({numero})
{
  function meuEvento(){
    console.log("Evento disparado", numero)
  }

  function meuEvento2(){
    console.log("Evento disparado", numero)
  }

return( 
  <div> 
    <p> Clique para disparar o evento</p>
    <Button event={meuEvento2} text="Novo Botao"/>
    {/*<button onClick={meuEvento()} >  Ativar</button>*/}
  </div>
)

}

export default evento;