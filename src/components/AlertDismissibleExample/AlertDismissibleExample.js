import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function AlertDismissibleExample() {
    const [show, setShow] = useState(false);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>
            Alert Heading
          </Alert.Heading>
          <p>
            Alert Body
          </p>
        </Alert>
      );
    }
    return (
      <Button variant="info" onClick={() => setShow(true)}>
        Show Custom Styled Alert
      </Button>
    );
  }
  
  export default AlertDismissibleExample;