import { observer } from 'mobx-react';
import React from 'react';
import { Sidebar, SystemName } from '@ff/ui-kit';

import Container from '../../layouts/Container';
import Main from '../../layouts/Main';
import logo from './assets/gnivc-logo.png';
import TableComponent from '../../Documents/TableComponent';

const Home: React.FC = observer(() => (
  <Main>
    <Sidebar>
      <SystemName logo={logo} />
    </Sidebar>

    <Container>
      <TableComponent />
    </Container>
  </Main>
));

export default Home;
