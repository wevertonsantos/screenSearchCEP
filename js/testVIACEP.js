	
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

	async function buscaEndereco(){
		const consultaAsync = await fetch('https://viacep.com.br/ws/01001000/json/')
		const consultaConvert = await consultaAsync.json();

		console.log(consultaConvert);
	}

buscaEndereco()

