
import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import User from './User'
import Posts from './Posts'


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

const fetchPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}





function App() {
  const postsPromise = fetchPosts()


  function handleClick() {
    alert("I am clicked")
  }
  const handleClick3 = () => {
    alert('clicked 3')
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h1>Vite + React</h1>
      
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUsers={fetchUsers}>

        </User>
      </Suspense> */}

      <Suspense fallback={<p>posts are coming...</p>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>


      <Counter></Counter>
      <button onClick={handleClick}>button 1</button>
      <button onClick={handleClick3}>button 3</button>
      <button onClick={() => alert('click 4')}>button 4</button>
      <button onClick={() => handleAdd5(10)}>button 5</button>
      <button onClick={function handleClick2() {
        alert('clicked 2')
      }}>button 2</button>
    </>
  )
}

export default App
