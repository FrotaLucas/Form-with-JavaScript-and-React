function Saudacao({nome}){

  function Gerarsaudacao(algumnome){
    return `<p> ola ${algumnome}</p>`
  }

return(

<p>{ Gerarsaudacao(nome) }</p>
)


}


export default Saudacao;