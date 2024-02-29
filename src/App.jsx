import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Trending from './components/Trending'
import Main from './components/Main'
import Second from './components/Second'

function App() {
  const [count, setCount] = useState(0)
  const myStyle = {
    backgroundImage:
        "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

  return (
    <>
    <div className='px-16 h-screen bg-[#FAF9F6]'>

        <Logo />
        <Navbar />
        <Trending />
        <Main  />
        <Second />
    </div>
    </>
  )
}

export default App
