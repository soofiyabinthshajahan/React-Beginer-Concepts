import React, { useState } from 'react';

function useStateFunction() {
    const [count, setCount] = useState([]);
let names = ["Beryllz","Hayacinth","Cavern"]

  return (
    <div>
      <p>Here is the printed values {count}</p>
      <button onClick={() => setCount(names)}>
        Click me
      </button>
    </div>
  )
}

export default useStateFunction
