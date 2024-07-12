import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  text-align: center;
  margin-left: 60px;
`

export const BotaoCancelar = styled(Link)`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.vermelho};
  border-radius: 8px;
  margin-right: 8px;
  text-decoration: none;
`
