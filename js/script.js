    const btnSearch = document.querySelector('#submit-cep')

    btnSearch.addEventListener('click', e => {
        e.preventDefault()
        console.log(this)
    })

    const url = fetch('http://viacep.com.br/ws/01001000/json/')
    .then(response => response.json())
    .then(r => console.log(r))

    console.log(url)