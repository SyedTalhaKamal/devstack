import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Banner({ image, text }) {
  return (
    <>
      <section className="main-banner">
        <Container fluid>
          <Row>
            <Col lg={4}>
              <div className="banner-heading">
                <h1>{text}</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Banner
