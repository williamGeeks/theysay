import {
  Navbar,
  NavbarBrand,
  Button
} from 'reactstrap';

function Header() {

  return (
    <div>
      <Navbar dark color='dark' expand="md">
        <NavbarBrand href="/">Theysay</NavbarBrand>
          <Button>New Post</Button>
      </Navbar>
    </div>
  );
}

export default Header;