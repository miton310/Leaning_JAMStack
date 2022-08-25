import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row,Col } from 'react-bootstrap'

const ContactDone = () => (
  <Layout>
    <Seo title="お問い合わせありがとうございます" />
    <Container fluid="md" style={{width:`80%`}}>
      <Row>
        <Col className="space"></Col>
      </Row>
      <h1 style={{ fontSize:`1.2rem` }}>お問い合わせありがとうございます！</h1>
      <p>お問い合わせありがとうございます。弊社担当者より2~3営業日中にご連絡いたします</p>
      <h2 style={{ fontSize:`1.2rem`}}>Message sent Succcess!</h2>
      <p>Thank you your inquiry.We will contact you by within 2~3 business days.</p>
      <Row>
        <Col className="space"></Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactDone