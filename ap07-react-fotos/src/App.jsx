import { Button } from 'primereact/button'
import Busca from './components/Busca'
import React from 'react'
import { createClient } from 'pexels'
class App extends React.Component {

  chavePexels = 'FOdpLqjK4lpRklQRzenJYrYUVceKULF8IIOGwFX1Dsn4E4RFfwjRqLyt'
  pexelsClient = null

  componentDidMount() {
    this.pexelsClient = createClient(this.chavePexels)
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    })
    .then((result) => console.log(result))
  }
  render() {

    return (
      <div className='grid border-1 justify-content-center border-400 border-round'>
        <div className='col-12'>
          <div className='flex mb-3'>
            <i className='pi pi-car mr-3' />
            <i className='pi pi-car' />
          </div>
        </div>

        <div className='col-12'>
          <h1> Exibir uma lista de ....</h1>
        </div>


        <div className='col-8'>
          <Busca onBuscaRealizada={this.onBuscaRealizada} />

        </div>
      </div>
    )
  }
}

export default App