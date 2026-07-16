import "./App.css";
import { useState, Fragment } from "react";
/* los .jsx necesitan siempre ahcer un return, 
y solo puede ser un elemento con hijos, osea no muchos <div> al mismo nivel
pero si puede ser un Div con div nesteados*/

const App = () => {

  //las const no mutan o sea no pueden cambiar por eso no se puede usar ++ tiene q ser  +1
  const [count,setCount] = useState(50);
//este handler es como un funcion
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    setCount(count -1);
  };

  const handlerReset = () =>{
    setCount(10);
  }
  // setTimeout(() => {
  //   setCount(count +1);
  // },1000)
  return (
    // <div className="container">
    //   <h1>Counter:{count}</h1>
    //   <hr />
    //   <button onClick={handleAdd} >+</button>
    //   <button onClick={handlerReset}>Reset</button>
    //   <button onClick={handleSubstract}>-</button>
    // </div>
    // esto tmb puede ser  <></> es la abreviacion de fragmento
    <Fragment> 
      <div className="container">
      <h1>Counter:{count}</h1>
      <hr />
      <button onClick={handleAdd} >+</button>
      <button onClick={handlerReset}>Reset</button>
      <button onClick={handleSubstract}>-</button>
     </div>
    </Fragment>
  )
}



export default App;
