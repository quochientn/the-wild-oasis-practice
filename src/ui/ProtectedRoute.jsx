import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

const StyledBox = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <StyledBox>
        <Spinner />;
      </StyledBox>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
