import React from 'react';
import { Send } from '@material-ui/icons';

import { Container, Title, Description, InputContainer, Input, Button} from './Newsletter.style'

const Newsletter = () => {
  return (
    <Container>
      <Title>
        Newsletter
      </Title>
      <Description>Weekly updates</Description>
      <InputContainer>
        <Input placeholder='Your email '/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
