import React from 'react';


// class Square extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     render() {
//         return (
//             <button
//              className="square"
//              onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );

}

export default Square;
// When we modified the Square to be a function component,
//  we also changed
//  onClick = {() => this.props.onClick()} to a shorter onClick = { props.onClick }
// (note the lack of parentheses on both sides).