//neste arquivo, estarão todos os componentes de estilização que serão compartilhados entre outras estruturas do projeto
import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstilizacaoGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  color: #666666;
  border-color: #666666;
  font-weight: bold;
  width: 100%;
  margin-bottom: 16px;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstilizacaoGlobal
