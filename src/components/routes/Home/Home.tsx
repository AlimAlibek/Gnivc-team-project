import React from 'react';
import { observer } from 'mobx-react';

import Container from '../../layouts/Container';
import Documents from '../../Documents';

const Home: React.FC = observer(() => (
  <Container>
    <Documents />
  </Container>
));
export default Home;
