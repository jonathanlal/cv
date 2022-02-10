import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
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

const HeroTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  z-index: 100;
  position: relative;
`

export default ({ className, title }) => (
    <>

  <HeroContainer className={className}>
    <Cloud/>
    <TitleContainer>

      {/*<HeroTitle>{title}</HeroTitle>*/}
    </TitleContainer>

  </HeroContainer>
    </>
)


