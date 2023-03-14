import { AppBarHeader, NavLinkStyled } from './AppBar.styled';

const AppBar = () => {
  return (
    <AppBarHeader>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
       
      </nav>
    </AppBarHeader>
  );
};

export default AppBar;
