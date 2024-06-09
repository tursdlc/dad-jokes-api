const jokeBtn = document.getElementById('jokeBtn');
const jokeEl = document.getElementById('joke');

// USING ASYNC/AWAIT
async function generateJoke() {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      "accept":'application/json',
    }
  })
  const data = await res.json();

  jokeEl.innerText = data.joke;
}

generateJoke();

jokeBtn.addEventListener('click', () => {
  generateJoke()
});

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
// 
