import './App.css'
export default function Child(props){
  return(
      <div id="box">
        <h1>How we can use Props.</h1>
        <h2>this is {props.count}</h2>
        <button onClick={()=>{
            props.setCount(200)
        }}>click</button>
        <h2>{props.arr}</h2>
      </div>
  )
}