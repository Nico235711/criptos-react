import styled from "@emotion/styled"

const ResultadoCripto = styled.div`
  color: #f5f6f7;
  font-family: "Lato", sans-serif;
  margin-top: 2rem;

  @media(min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }

`

const Imagen = styled.img`
  display: block;
  width: 150px;
  margin: 0 auto;

  @media(min-width: 768px) {
    margin: 0;
  }
`

const Precio = styled.p`
  font-size: 24px;
`

const Texto = styled.p`
  font-size: 18px;
`

const Resultado = ({ cotizacion }) => {

  const { 
    IMAGEURL, 
    CHANGEPCT24HOUR, 
    PRICE, 
    LASTUPDATE,
    LOWDAY,
    HIGHDAY
  } = cotizacion

  return (
    <ResultadoCripto>
      <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        <Precio>El precio es: {PRICE}</Precio>
        <Texto>Precio más alto día: {HIGHDAY}</Texto>
        <Texto>Precio más bajo día: {LOWDAY}</Texto>
        <Texto>Variación en las últimas 24 horas: {CHANGEPCT24HOUR}%</Texto>
        <Texto>Última actualización: {LASTUPDATE}</Texto>
      </div>
    </ResultadoCripto>
  )
}

export default Resultado