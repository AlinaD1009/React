import { Component } from 'react';


// class Header extends React.Component {

//     render() {
//         return (
//             <div>
//                 Hello class component
//             </div>
//         )
//     }
// }

class Header extends Component {
    render() {
        return (
            <nav>
                <div>
                    {this.props.ddd}
                </div>
                <div>
                    ggg
                </div>
                <div>
                    ggg
                </div>
                <div>
                    ggg
                </div>
                <div>
                    ggg
                </div>
                <div>
                    ggg
                </div>
            </nav>
        );
    }
}

export default Header;
