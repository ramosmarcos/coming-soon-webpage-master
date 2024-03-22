
const addLoading = () => {
    const botao = document.querySelector('button[type="submit"]');
    botao.innerHTML = '<img src="img/spinner.png" class="loading">';
}

const form = document.getElementsByName('contact-form')    

const handleSubmit = (e) => {
    e.preventDefault();

    addLoading();

    // const name = document.querySelector('input[name="name"]').value;
    // const number = document.querySelector('input[name="number"]').value;
    // const email = document.querySelector('input[name="email"]').value;

    fetch('https://script.google.com/macros/s/AKfycbwAIomMt2rug7YywvPSeeckRgfnut9eEGKv-qNH0lvDV1PdQ4lrpvfz3U0AtH2rfEIQig/exec', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: new FormData(form)
    }).then(() => {
            window.location.reload();
            document.querySelector('button[type="submit"]').innerHTML = 'Enviado!';
            document.querySelector('button[type="submit"]').disabled = true;
    }).catch(error => console.error('Error!', error.message))

    return false;
}

form.addEventListener('submit', handleSubmit )




// const scriptURL = 'https://script.google.com/macros/s/AKfycbwxrr9gY3hHl86SuG0uv8nQa0NJHnmqFYqzCzrqM0w4wWDuE-B--j9r9iwch5FHZK6o/exec'

// // const form = document.getElementsByName('contact-form')    

// form.addEventListener('submit', e => {
//  e.preventDefault()
//  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//  .then(alert("Thank you! your form is submitted successfully." ))
//  .then(() => { window.location.reload(); })
//  .catch(error => console.error('Error!', error.message))
// })