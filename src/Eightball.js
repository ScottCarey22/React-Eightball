import "./Eightball.css"
import React, { useState } from "react";


const getAnswer = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length)
    return arr[randIdx];

};


const Eightball = (prop) => {
    const [msg, setMsg] = useState("Think of a Question.")
    const [color, setColor] = useState("black");

    // const Counter = () => {
    //     const [count, setCount] = useState(0);
    //     setCount = count + 1

    // }

    const restart = () => {
        setColor('black');
        setMsg('Think of a Question.')
    }

    const Clicker = () => {
        const { msg, color } = getAnswer(prop.answers);
        setMsg(msg);
        setColor(color);
        // setCount(count + 1)
    };
    return (
        <>
            <div className='Eightball' onClick={Clicker} style={{ backgroundColor: color }}>
                <b>{msg}</b>

            </div>

            <button className='restart' onClick={restart}>Restart</button>
        </>
    )
};
Eightball.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
};




export default Eightball;