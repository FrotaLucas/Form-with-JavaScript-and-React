import {useState} from 'react'

function Formulario(){

  function CadastroUsuario(e)
  {
    e.preventDefault()
    console.log(name)
    console.log(password)
    console.log(`usuario ${name} cadastrado com o ${password}`)
  }

  const [name, setName] = useState()
  const[password, setPassword] = useState()

  return(
    <div> 
      <h1> 
        Formulario
      </h1>
      <form onSubmit ={CadastroUsuario}> 
       <div> 
        <label htmlFor = "name"> Nome:

        </label>

        <input type="text" id="name" name ="name" placeholder=" Digite seu nome" onChange={(e) => setName(e.target.value)}> 
        </input>
           
        </div>
        <div> 
        <label htmlFor = "name"> Senha:

        </label>
        <input type="text" id="name" name ="password" placeholder=" Digite sua senha" onChange={ (e) => setPassword(e.target.value)} > 
        </input>
           
        </div>
        <div> 
          <input type="submit" value="cadastrar">
          </input>
        </div>
      </form> 
    </div>
  )
}
export default Formulario;