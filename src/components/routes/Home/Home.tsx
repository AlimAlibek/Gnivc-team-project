import { observer } from 'mobx-react';
import React from 'react';
import Container from '../../layouts/Container';
import Documents from '../../Documents';
import Login from '../../Login';

const Home: React.FC = observer(() => (
  <Container>
    <Login />
    <Documents />
  </Container>
));
export default Home;
