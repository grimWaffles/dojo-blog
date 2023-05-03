import { useState } from "react"

const Home = () => {
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)

    const handleClick = (e) => {
        setName('luigi'); setAge(69)
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br />

            <button onClick={handleClick}>Click me!</button>
            <button onClick={() => { handleClickAgain('mario') }}>Click me again</button>
            <br /><br />
            
            <p>{name} is {age} years old.</p>
        </div>
    );
}

export default Home;