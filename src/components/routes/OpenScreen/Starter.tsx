import { observer } from 'mobx-react';
import React from 'react';

import Container from '../../layouts/Container';
import Documents from '../../Documents';
import Login from '../../LoginScreen';

const Starter: React.FC = observer(() => (
  <Container>
    <Login />
    <Documents />
  </Container>
));
export default Starter;
