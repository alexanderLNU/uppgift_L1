const nameField = document.querySelector('input')
const button = document.querySelector('button')
const landingPara = document.querySelector('p')
const generateDogButton = document.getElementById('random__dog--button')
const generatedDog = document.getElementById('dog__img--wrapper')

button.addEventListener('click', () => {
    const chosenName = nameField.value.trim()

    if (chosenName) {
        landingPara.textContent = `Wow, ${chosenName}! You completed the assignment!🥳`
        confetti({
            particleCount: 300,
            spread: 100,
            origin: { y: 0.8 }
        });
    } else {
        document.body.classList.add('dummy')
        landingPara.style.color = 'red'
        landingPara.textContent = 'Write your name dummy!😡'

        setTimeout(() => {
            document.body.classList.remove('dummy')
            landingPara.style.color = '#009f05'
            landingPara.textContent = 'Enter your name in the namefield💁🏻‍♂️'
    }, 1500)
    }
})

generateDogButton.addEventListener('click', async () => {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        const ImgOfDog = data.message

        generatedDog.innerHTML = `<img src="${ImgOfDog}" class="dog__img--styling">`
    } catch (err) {
        console.error(err)
    }
})






