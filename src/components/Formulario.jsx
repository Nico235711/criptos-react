import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"
import { useEffect, useState } from 'react'
import Error from "./Error"

const InputSubmit = styled.input`
  width: 100%;
  background-color: #9497ff;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 10px;
  transition: all .5s;

  &:hover {
    background-color: #7a7dfe;
  }
`

const Formulario = ({ setMonedas }) => {
  
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  // custom hooks
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas)
  const [criptomoneda, SelectCriptoMoneda] = useSelectMonedas("Elige tu criptomoneda", criptos)
  
  // llamada a API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const respuesta = await fetch(url) 
      const resultado = await respuesta.json()

      // construyo mi array con la informacion de la API
      const arrCriptos = resultado.Data.map(cripto => {
        const objCripto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objCripto;
      })
      setCriptos(arrCriptos)
    }
    consultarAPI()
  }, []);
  
  const handleSubmit = e => { 
    e.preventDefault()

    if ([moneda, criptomoneda].includes("")) {
      setError(true)
      return
    }

    setError(false)
    setMonedas({
      moneda,
      criptomoneda
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {
        error && <Error>Todos los campos son obligatorios</Error>
      }

      <SelectMonedas />
      <SelectCriptoMoneda />

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario