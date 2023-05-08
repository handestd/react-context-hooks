import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { toggleTheme } = this.context;
//         return (
//             <button onClick={toggleTheme}>
//                 Toggle the theme
//             </button>
//         );
//     }
// }


const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Toggle the theme
        </button>);
}

export default ThemeToggle;
// export default ThemeToggle;