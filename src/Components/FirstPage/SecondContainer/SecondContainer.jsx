import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './SecondContainer.module.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import StarsIcon from '@material-ui/icons/Stars';

const SecondContainer = () => {
    return(
        <Container fluid className = {styles.container}>
        <Row>
                <Col xs={12} sm={4} className={styles.box}>
                <center><i class="far fa-check-circle fa-3x sym"></i><br />
                <h3>Easy to use</h3>
                <p className="lightp">So easy to use</p></center>
              </Col>
              <Col xs={12} sm={4} className={styles.box}>
              <center><i class="fas fa-stopwatch fa-3x sym"></i><br />
              <h3>Saves you time and money</h3>
              <p className="lightp"> We have all the features to save your time and allow you to use it wherever you want</p></center>
            </Col>
              <Col xs={12} sm={4} className={styles.box}>
              <center><i class="fas fa-trophy fa-3x sym"></i><br />
              <h3>Only select the best</h3>
              <p className="lightp"> With ratings for all the photographers provided by customers , you can select best for you </p> </center>
           </Col>
        </Row>
        </Container>
    );

}

export default SecondContainer;
