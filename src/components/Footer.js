import {
  Navbar,
  NavbarText,
} from 'reactstrap';

function Footer() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} >
      <Navbar>
          <NavbarText>Free and open-source polling - Theysay 2023</NavbarText>
      </Navbar>
    </div>
  );
}

export default Footer;