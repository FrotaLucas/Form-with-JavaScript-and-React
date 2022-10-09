import styles from './Estilo.module.css'
import Item from './Item'


function pessoa(props){
  return(
    <div  className={styles.conteudo}> 
      <h2> Nome {props.nickname}</h2>
      <p> Idade {props.age}</p>
      <p> Profissao {props.ocupation}</p>
    </div>
  );
};

export default pessoa;
