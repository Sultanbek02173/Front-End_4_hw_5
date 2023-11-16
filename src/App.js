import './components/style.scss';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [timer, setTime] = useState(10);
  const [point, setPoint] = useState(0);
  const [result, setResult] = useState(0);
  const [flag, setFlag] = useState(true);


  const startTime = () =>{
    let time = setInterval(() => {
      setTime((timer) =>{
        if(timer > 0){
          return timer - 1
        }else{
          clearInterval(time);
        }
      })
    }, 1000);
  }

  const start = () =>{
    if (timer > 0){
      setPoint(point + 1);
    }else{
      setTime(0)
      setResult(point / 10)
      setFlag(false);
    }
    
    if(flag === true){
      startTime();
    }

    setFlag(false);
  }

  const restart = () =>{
    setTime(10);
    setPoint(0);
    setResult(0);
    setFlag(true);
  }
 
  return (
    <div >

      <Button start={start} restart={restart} time={timer} point={point} result={result} />
    
    </div>
  );
}

export default App;
