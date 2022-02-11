import React from 'react'
import styled from 'styled-components'
import {Col, Container, Row} from 'react-awesome-styled-grid'


const Education = ({ className }) => (
    <>
    <h1>Education</h1>
  <Container>

      <Row>
          <Col xs={4} sm={4}>
              <ul>
                  <li>
                      <p><strong>MSc Computer Networking & Cyber Security</strong><br/>
                      <small>London Metropolitan University 2017 - 2018 (unfinished)</small></p>
                  </li>
                  <li><p><strong>BSc (Hons) Computer Science</strong><br/>
                      <small>London Metropolitan University 2013 - 2017</small></p>
                  </li>
                  <li><p>
                      <strong>BA (Hons) Business Management</strong><br/>
                      <small>University of Brighton 2010 - 2012</small></p>
                 </li>
                  <li><p><strong>English International College</strong><br/>
                      <small>Marbella,Spain 1996 - 2010</small></p>
                  </li>
              </ul>
          </Col>
          <Col xs={4} sm={4}>
    <ul>
        <li><p>
            <strong>Google Developer Challenge Scholarship: Android Dev</strong><br/>
            <small>Udacity 2017</small></p>
        </li>
        <li><p>
            <strong>Website Performance Optimization</strong><br/>
            <small>Udemy 2017</small></p>

        </li>
        <li><p>
            <strong> Online Marketing Fundamentals</strong><br/>
            <small>Google Digital Garage 2017</small></p>

        </li>
        <li><p>
        <strong>Game Development Online</strong><br/>
        <small>Train2Game 2012-2013 (unfinished)</small></p>

        </li>

    </ul>
          </Col>
      </Row>

  </Container>
    </>
);

export default styled(Education)`
    p{
      line-height: 0;
    }
    `
