
const consultarCep = () => {
    console.log('chamou a api')
  const cep = document.getElementById('cep').value 

let uri = `https://cep.awesomeapi.com.br/json/${cep}`

console.log(`URI: ${uri}`)
   fetch(uri)
      .then(response => response.json())
      .then(json => {
        console.log(json)
     
        document.getElementById('logradouro').value = json.address
        document.getElementById('N').value = json.number
        document.getElementById('complemento').value = json.complement
        document.getElementById('bairro').value = json.district
        document.getElementById('cidade').value = json.city
        document.getElementById('estado').value = json.state
        document.getElementById('ddd').value = json.ddd

    })
}


/* function consultarCep() {

} */