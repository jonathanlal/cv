import React from 'react'
import styled from 'styled-components'
import Cloud from '../cloud'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  height: 500px;
  background: ${({ theme }) => theme.colors.sky}
  background-size: 100% 100%;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`



export default ({ className }) => (
  <HeroContainer className={className}>
    <Cloud/>
    <TitleContainer/>
  </HeroContainer>
)


