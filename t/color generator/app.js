const getcolor = ()=>{
    const randomNumber = Math.random()
    console.log(randomNumber);
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor()
)