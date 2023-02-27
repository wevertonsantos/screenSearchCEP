const consultaCEP = fetch('https://viacep.com.br/ws/01001252/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if(r.erro){
            throw Error ('Esse CEP não existe')
        }else{
            console.log(r)
        }
    })
    .catch(erro => {
        if(erro){
            console.log('Tente outro CEP: tem que ter {8} dígitos, por exemplo: 01001000')
        }
    })
    .finally(mensagem => console.log('mensagem'))
