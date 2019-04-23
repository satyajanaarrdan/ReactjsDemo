

import React from 'react';

const headerStyle={textAlign:'center',padding:20,background:'#000',color:'#ffff',textTransform:'uppercase'};
const Header = function () {
    return (
        <div style={headerStyle}>
            Phone Directory
    </div>
    )
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div className="header">
//                 Phone Directory
//           </div>
//         )
//     }

// }

export default Header;