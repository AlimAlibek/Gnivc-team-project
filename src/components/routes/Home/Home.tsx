import React from 'react';
import { observer } from 'mobx-react';
import { Sidebar, SystemName } from '@ff/ui-kit';

import Container from '../../layouts/Container';
import Main from '../../layouts/Main';
import logo from './assets/gnivc-logo.png';
import Documents from '../../Documents/Documents';

const Home: React.FC = observer(() => (
  <Main>
    <Sidebar>
      <SystemName logo={logo} />
    </Sidebar>

    <Container>
      <Documents />
    </Container>
  </Main>
));

export default Home;
