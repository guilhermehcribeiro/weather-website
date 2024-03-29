const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('msg-1')
const messageTwo = document.getElementById('msg-2')

weatherForm.addEventListener('submit', event => {
    event.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const location = search.value

    fetch('/weather?address=' + location)
    .then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})