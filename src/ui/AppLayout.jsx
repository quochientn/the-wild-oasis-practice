import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppContainer = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const StyledAppLayout = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;
`;

const Container = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppContainer>
      <Header />
      <Sidebar />
      <StyledAppLayout>
        <Container>
          <Outlet />
        </Container>
      </StyledAppLayout>
    </StyledAppContainer>
  );
}

export default AppLayout;
