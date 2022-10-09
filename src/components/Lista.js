import Item from "./Item";
import styles from "./Estilo.module.css"

function lista()
{
  return( 
    <> 
    <ul> 
    <h2> Minha Lista</h2>
    <Item marca = "ferrari" ano = {1990}/> 
    <Item marca = "lanborguini" ano = {1980}/>
    </ul>
</>

)
}



export default lista;