// Code EyesOnMe Component Here
function Focus () {
    console.log("Good!")
}

function Blur () {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe () {
    return (
        <button onFocus={Focus} onBlur={Blur}>Eyes on me</button>
    )
}
export default EyesOnMe