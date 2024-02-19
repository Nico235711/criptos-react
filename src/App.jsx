import styled from "@emotion/styled"
import ImagenCripto from './assets/imagen-criptos.png'
import Formulario from "./components/Formulario"
import { useEffect, useState } from "react"
import { monedas } from "./data/monedas"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner"

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0;
  display: block;
`

const Heading = styled.h1`
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 700;
  margin: 80px 0 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    display: block;
    background-color: #66a2fe;
    margin: 10px auto;
  }
`

function App() {

  // moneda va a tener la moneda y la cripto
  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})

  // state para poner un spin de carga
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      // cotizar cripto
      const cotizarCripto = async () => {
        setCargando(true)
        setCotizacion({})
        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCotizacion(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="imagen de criptomonedas" />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario
          setMonedas={setMonedas}
        />
        {
          cargando && <Spinner />
        }

        {
          cotizacion?.PRICE &&
            <Resultado 
              cotizacion={cotizacion}
            />
        }
      </div>
    </Contenedor>
  )
}

export default App
