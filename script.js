
const addLoading = () => {
    const botao = document.querySelector('button[type="submit"]');
    botao.innerHTML = '<img src="img/spinner.png" class="loading">';
}

const handleSubmit = (e) => {
    e.preventDefault();

    addLoading();

    const name = document.querySelector('input[name="name"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const email = document.querySelector('input[name="email"]').value;

    fetch('https://api.sheetmonkey.io/form/mxVayX86zBVSLBJp4FzUHp', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            number: number,
            email: email
        })
    }).then(() => {
            document.querySelector('button[type="submit"]').innerHTML = 'Enviado!';
            document.querySelector('button[type="submit"]').disabled = true;
    })

}

document.querySelector('form').addEventListener('submit', handleSubmit )