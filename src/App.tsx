import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
 const Button1Foo=(subscriber:string, age:number, adress:string)=>{
console.log(subscriber, age, adress)
 }
 const Button2Foo=(subscriber:string)=>{
  console.log(subscriber)
 }
 const StupidButton=()=>{
  alert("stupid button")
 }

  return (
    <div className="App">
     <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo("I'm Vasya", 21, "live in Minsk")} />
     <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo("I'm Ivan")}/>
     <Button name={'Stupid Button'} callBack={StupidButton}/>
    </div>
  );
}
export default App;
