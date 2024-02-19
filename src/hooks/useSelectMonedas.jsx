import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
  color: #fff;
  font-size: 24px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
  display: block;
`

const Select = styled.select`
  width: 100%;
  padding: 10px;
  text-align: center;
  outline: none;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  border-radius: 10px;
  appearance: none;
  margin-bottom: 20px;
  outline: none;
`

const useSelectMonedas = (label, opciones) => {

  const [state, setState] = useState("")

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select 
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {
          opciones.map(opcion => (
            <option value={opcion.id} key={opcion.id}>
              {opcion.nombre}
            </option>
          ))
        }
      </Select>
    </>
  )

  return [state, SelectMonedas]
}

export default useSelectMonedas