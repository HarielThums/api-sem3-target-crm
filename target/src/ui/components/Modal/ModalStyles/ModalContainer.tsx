import { Modal } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

export const ModalStyled = styled(Modal)`
  background-color: rgb(107, 105, 105, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled("div")`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing(3) + " " + theme.spacing(3)};
  border-radius: 8px;
  overflow: auto;
  overflow-x: hidden;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-height: 80vh;
  }
`;
export const TwoColumnsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

export const ThreeColumnsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;
