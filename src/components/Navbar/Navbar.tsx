import * as React from 'react';
import { Nav , StyledLink} from './NavbarStyle';

interface DefaultNavbarProps {}

const Navbar: React.SFC<DefaultNavbarProps> = () =>{
    return(
        <React.Fragment>
             <Nav>
                    <StyledLink to="/" >Home</StyledLink>
                        <StyledLink to="/firstPage">First Page</StyledLink>
                        <StyledLink to="/breeds">BreedsOverview</StyledLink>
            </Nav>
        </React.Fragment>

    )
}

export default Navbar;