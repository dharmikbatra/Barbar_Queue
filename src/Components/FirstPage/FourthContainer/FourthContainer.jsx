import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './FourthContainer.module.css';

const FourthContainer = () => {
    return(
        <Container fluid className = {styles.container}>
      <div className={styles.contactme}>
        <h2>Get In Touch</h2>
        <h3>If u have similar interests</h3>
        
        <button type="button" name="button"><a class="btn" href="mailto:batradharmik@gmail.com">CONTACT ME</a>  </button>

      
    </div>


    <div className={styles.bottomcontainer}>
      <a className={styles.footerlink} href="https://www.linkedin.com/%22%3ELinkedIn"> Linked In </a>
      <a className={styles.footerlink} href="https://twitter.com/%22%3ETwitter"> Twitter </a>
      <a className={styles.footerlink} href="https://www.appbrewery.co/%22%3EWebsite" > Website </a>
      <p> dijdifjidnsovcodsjmbodsjoskfcosk</p>
    </div>
   
        </Container>

    );
}

export default FourthContainer;