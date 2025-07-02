
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
      document.getElementById('bairro').value = json.district
      document.getElementById('uf').value = json.state
      document.getElementById('localidade').value = json.city
      document.getElementById('ddd').value = json.ddd

    })
};


/* function consultarCep() {

} */

const fetchEstados = () => {
  let uri = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

  console.log(`URI: ${uri}`)
  fetch(uri)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      let options = '<option selected disabled>Selecione...</option>'

      data.forEach(estado => {
        options = options + `<option value="${estado.sigla}">${estado.nome}</option>`
      });

      document.getElementById('uf').innerHTML = options

    });

};

fetchEstados()


const fetchMunicipios = () => {
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios`)
    .then(response => response.json())
    .then(json => {

      console.log(json)

      let options = '<option selected disabled>Selecione...</option>'

      json.forEach(municipio => {
        options += `<option value="${municipio.nome}">${municipio.nome}</option>`
      })

      document.getElementById('localidade').innerHTML = options

    });
}

fetchMunicipios()
