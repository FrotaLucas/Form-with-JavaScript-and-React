import {useState} from 'react'


function Condicao(){ 
  const [useremail,setEmail] = useState()
  function EnviarEmail(e){
    e.preventDefault()
    /*console.log(`email ${email} cadastrado`)*/
    setEmail(useremail)
  
  }

  function ApagarEmail(){
    setEmail('')

  }
 
  return(
    <div> 
      <h2> Cadestre seu e-mail</h2>
      <form>
        <input type='email'name='email' id="email" placeholder='Digite seu E-mail' onChange={(e)=> setEmail(e.target.value) }/>
      
        <button type='submit' onClick={EnviarEmail}> Enviar E-mail  
        </button>
        { useremail && ( 
          <div> 
          <p> O e-mail do usuario e {useremail}</p>
          </div>
        )}
      </form>
      
    </div>
  )

}


export default Condicao;

