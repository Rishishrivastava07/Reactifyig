import { useState } from 'react'

//Two way binding. :)

const App = () => {
  const [Title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted by',Title);
    setTitle('');
  }
  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter your name.'
        value={Title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>

      </form>
    </>
  )
}

export default App