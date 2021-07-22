// Code Keypad Component Here

function Password() {
    console.log("Entering password...")
}

function Keypad () {
    return (
        <input type="password" onChange={Password}/>
    )
}
export default Keypad