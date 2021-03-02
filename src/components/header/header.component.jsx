import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'


import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';


import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, OptionsContainer,  OptionLink } from './header.styles'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
           <OptionLink to='/shop'>
               SHOP
            </OptionLink>   
            <OptionLink to='/contact'>
               CONTACT
            </OptionLink>  
            {currentUser ?(
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </OptionLink>
            ):(
                <OptionLink to='/signIn'>
                    SIGN IN
                    </OptionLink>
            )} 
           <CartIcon />
        </OptionsContainer>
        {
        hidden ? null :<CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapStateToProps)(Header)