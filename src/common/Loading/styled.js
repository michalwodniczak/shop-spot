import styled, { keyframes } from "styled-components";
import { ReactComponent as circle } from "./loading.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const rotate = keyframes`
from {
        transform: rotate(0deg);
    };
    to {
        transform: rotate(360deg);
    };
`;

export const Loader = styled(circle)`
  width: 160px;
  animation: ${rotate} infinite 800ms linear;
`;
