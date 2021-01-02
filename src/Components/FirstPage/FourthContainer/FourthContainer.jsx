import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './FourthContainer.module.css';


function FourthContainer(){
    return(
        <Container fluid className = {styles.container}>
      <div className={styles.contactme}>
        <h2>Get In Touch</h2>
        <h5>If u have similar interests</h5>
        <button type="button" name="button" class="btn btn-secondary btn-sm"><a class="btn" href="mailto:batradharmik@gmail.com">CONTACT ME</a>  </button>
      </div>


    <div className={styles.bottomcontainer}>
      <a className={styles.footerlink} href="https://www.linkedin.com" target="_blank"> Linked In </a>
      <a className={styles.footerlink} href="https://twitter.com" target="_blank"> Twitter </a>
      <a className={styles.footerlink} href="https://dharmikbatra.github.io/firstsite" target="_blank" > Website </a>
      <p> @copyright2020 JID Production </p>
    </div>

        </Container>
      );
}

export default FourthContainer;
