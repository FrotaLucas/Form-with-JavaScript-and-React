function Outralista({item}){


  return(  
    <> 
    <h3> Lista de coisas boas</h3>

   {item.map( (x)=> (<p> {x}</p>))} 
    </>
    )
}

export default Outralista;