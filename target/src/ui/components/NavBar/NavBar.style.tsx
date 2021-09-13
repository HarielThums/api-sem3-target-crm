import { AppBar, Avatar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const drawerWidth = 240;

export const Root = styled("div")`
  display: flex;
`;

export const DrawerStyled = styled("nav")`
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 100px;
  }
`;

export const AppBarStyled = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: calc(100vw);
    margin-left: 240px;
    .MuiToolbar-root {
      height: 100px;
    }
  }
`;

export const ToolbarHeaderStyled = styled(Toolbar)`
  display: grid;
  width: 100vw;
  align-items: center;
  grid-template-columns: 50px 1fr 30px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0;
    grid-template-columns: 55px 1fr 60px;
  }
`;

export const UserPictureStyled = styled(Avatar)`
  width: 30px;
  height: initial;
  aspect-ratio: 1;
  font-family: "Arial Narrow", Arial, sans-serif;
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 50px;
  } ;
`;

export const MenuButton = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)};
  margin-left: -${({ theme }) => theme.spacing(2)};

  display: "none";
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: "none";
  } ;
`;

export const ToolbarStyled = styled("div")`
  ${({ theme }) => theme.mixins.toolbar}
  min-height: 0;
`;
export const DrawerPaper = styled(Drawer)`
  width: ${drawerWidth}px;
`;
export const ContentStyled = styled("main")`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)} 0;
  margin-left: ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 auto;
  }
`;

export const HeaderSpace = styled("div")`
  height: 36px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 56px;
  }
`;
export const DrawerContainer = styled("div")`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
export const HeaderLogoStyled = styled("img")`
  height: 40px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 0 auto;
    height: 70px;
  }
`;
