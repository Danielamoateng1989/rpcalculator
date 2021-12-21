import React from 'react'
import styled from 'styled-components';


const Footer = () => {

    
   const d = new Date();
  let year = d.getFullYear();
    
    return (
        <footer className="footer-container">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                     Copyright &copy;{year} Daniel Amoateng
                    </Col> 
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
