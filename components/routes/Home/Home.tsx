import { observer } from "mobx-react";
import React from "react";
import { Sidebar, SystemName } from "@ff/ui-kit";

import Container from "../../layouts/Container";
import Main from "../../layouts/Main";
import logo from "./assets/gnivc-logo.png";
import TableComp from "../../Documents/TableC";

const Home: React.FC = observer(() => (
  <Main>
    <Sidebar>
      <SystemName logo={logo} />
    </Sidebar>

    <Container>
      <TableComp />
    </Container>
  </Main>
));

export default Home;
