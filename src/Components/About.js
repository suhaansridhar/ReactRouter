import React from 'react'

const About = () => {
  const [counter, setCounter] = React.useState(0);
  function increment(){
    setCounter(prevValue => prevValue + 1);
  }
  return (
    <div>
      <h1>About Page</h1>
      <h3>{counter}</h3>
      <button onClick={increment}>Click</button>
    </div>
  )
}

export default About
