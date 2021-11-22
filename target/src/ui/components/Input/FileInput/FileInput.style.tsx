import { experimentalStyled as styled } from "@material-ui/core/styles";

export const InputContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;
