    //  Button of search
    const btnSearch = document.querySelector('#submit-cep')

    // Event click on button of search
    btnSearch.addEventListener('click', e => {
        e.preventDefault()

        // Get input if element CEP
        const inputCep = document.querySelector('#cep')

        // Get value of element CEP
        const valueCep = inputCep.value

        insertDatas(requestAsync(valueCep));

        // URL for fetch
        // const url = `https://viacep.com.br/ws/${valueCep}/json/`

        // // Request and fuction for insert data in elements
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {

        //             if (data.erro){
        //                 alert('CEP INVALID')
        //                 return;
        //             }

        //             insertDatas(data)
        //         })

        })

    // Function for insert datas in elements

    function insertDatas(data){

            // Get elements for insert datas

            const street = document.querySelector('#street')
            const city = document.querySelector('#city')
            const state = document.querySelector('#uf')

            street.value = data.logradouro
            city.value = data.localidade
            state.value = data.uf

        }

    // Function async await request url

    async function requestAsync(valueCep){
        try{
            const webserviceUrl = await `https://viacep.com.br/ws/${valueCep}/json/`;
            const webserviceForJson = await webserviceUrl.json();

            if (webserviceForJson.erro){
                   alert('CEP INVALID')
            }

            return webserviceForJson;

        }catch (erro){
            console.log(erro)
        }
    }

