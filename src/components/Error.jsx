import styled from "@emotion/styled"

const Mensaje = styled.p`
  background-color: #ad3535;
  color: #f5f6f7;
  text-align: center;
  font-size: 24px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  padding: 10px;
  border-radius: 10px;
`

const Error = ({ children }) => {

  return (
    <Mensaje>{children}</Mensaje>
  )
}

export default Error