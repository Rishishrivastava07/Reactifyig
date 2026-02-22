import Fetchax from "./components/fetchax";


const App = () => {

  const user = {
    username: 'Rishi',
    email: 'rishi@gmail.com',
    age: 22
  }

  localStorage.setItem("user", JSON.stringify(user));

  const retrievedUser = JSON.parse(localStorage.getItem("user"));

  // console.log(retrievedUser);

  return (
    <div>
     <Fetchax />

    </div>
  )
}

export default App 