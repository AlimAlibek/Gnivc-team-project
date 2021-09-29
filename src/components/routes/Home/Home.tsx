import { observer } from 'mobx-react';
import React from 'react';
import { Sidebar, SystemName } from '@ff/ui-kit';

import PieChart from '../../charts/PieChart';
import BarChart from '../../charts/BarChart';
import Container from '../../layouts/Container';
import Main from '../../layouts/Main';
import classes from './Home.module.scss';
import logo from './assets/gnivc-logo.png';

const Home: React.FC = observer(() => (
  <Main>
    <Sidebar>
      <SystemName logo={logo} />
    </Sidebar>

    <Container>
      <div className={classes.charts}>
        <BarChart />
        <PieChart />
      </div>
    </Container>
  </Main>
));

export default Home;
