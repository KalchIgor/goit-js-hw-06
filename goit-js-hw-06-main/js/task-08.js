const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    // Предотвратить отправку   event.preventDefault()
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены')
    }
    const userDetails = { email: email.value, Password: password.value }

    console.log(userDetails)
    event.currentTarget.reset()
}
