import {useState} from 'react';

function SmartCOunter(){
  //retorna um veto
  //1, variavel stateful
  //2, função amarrada a essa variavel e atualiza esse valor
  const [ quantity, upQuantity ] = useState(1)
  return (
    <>
      <h1>{quantity}</h1>
      <button onClick={() => upQuantity(quantity + 1)}>Aumentar +1</button>
    </>
  )
}

export default SmartCOunter;