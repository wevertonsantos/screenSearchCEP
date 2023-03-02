	
	// request, return datas and treating

	const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
	    .then(resposta => resposta.json())
	    .then(r => {
	        if(r.erro){
	            throw Error ('')
	        }else{
	            console.log(r)
	        }
	    })
	    .catch(erro => {
	        if(erro){
	        }
	    })
	    .finally(mensagem => console.log())

    // async await

	async function buscaEndereco(cep){
		try{
			const consultaAsync = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
			const consultaConvert = await consultaAsync.json();

			if (consultaConvert.erro) {
				throw Error('Cep não existente!');
				}
				return consultaConvert;
			}catch (erro){
				console.log(erro)
			}
	}

ceps = ['01001000', '01001001']
const conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
console.log(conjuntoCeps)
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

