const jokeEl = document.getElementById('joke')

const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


// FIRST METHOD

// function generateJoke() {
//     const config = {
//          headers: {
//             Accept: 'application/json'
//          },
//     } 
    
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())

//     //WE CAN SEE THE RESULT IN CONSOLE IN OBJECT FORM

//     // .then((data) => console.log(data))

//     .then((data)=>{
//         jokeEl.innerHTML = data.joke
//     })
// }



// USING ASYNC/AWAIT

async function generateJoke() {
    const config = {
         headers: {
            Accept: 'application/json'
         },
    } 
    
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}
