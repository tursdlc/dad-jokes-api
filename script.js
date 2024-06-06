const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');



jokeBtn.addEventListener('click', generateJoke);

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config);
  then((res) => res.json())

  then((data) => {
    jokeEl.innerHTML = data.joke})
  return res 
  
    
}
console.log(res);
//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
