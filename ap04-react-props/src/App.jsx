import Pedido from "./Pedido"
import Animal from "./Animal"

const App = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Animal
            tipo = "cat"
            tamanho = "4"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido
            data="24/12/1991"
            icone="car"
            titulo="Carro"
            descricao="Porsche Amarelo"
            />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido 
            data="51/06/222"
            icone="tractor"
            titulo="Trator"
            descricao="Trator Porsche P111"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido 
            data="31/02/2099"
            icone="house"
            titulo="Casa"
            descricao="Casa Amarela"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido 
            data="11/09/2025"
            icone="computer"
            titulo="Computador"
            descricao="PC da Xuxa"
          />
        </div>
      </div>
      
    </div>
  )
}

export default App