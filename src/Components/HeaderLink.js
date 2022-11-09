import {Link, useLocation} from 'react-router-dom'

export const HeaderLink = (props) => {
    const {to, children} = props
    let currentLocation = useLocation()

    function GetClassName() {
        if (currentLocation.pathname === to) {
            return 'header-button-selected';
          }
      
          return 'header-button';
    }

    return (
        <Link to={to}>
            <button className={GetClassName()}>{children}</button>
        </Link>
    );
};