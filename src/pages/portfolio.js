import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import Hero from "../components/hero/hero";

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  //box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
  margin-bottom: 0;
`
const Desc = styled.p`
margin-top:0;
  text-align: center;

`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;
  margin-bottom: 0;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Portfolio = ({ className, location }) => {
  const title = "Portfolio"
  const { keywords, portfolio } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />
        <Hero
            heroImg={siteConfig.siteCover}
            title={title}
        />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
            <p>Some of these links may no longer be active - however I can run you through any of them from my local machine.</p>
            <br/>
          <Row>
            {portfolio.map(job => (
              <Col
                key={job.description}
                align="center"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                >
                  <Image src={withPrefix(job.image)} />
                  <Desc>{job.description}</Desc>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portfolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
