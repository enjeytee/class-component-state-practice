import React from "react"

export default class App extends React.Component {
    state = {
        count: 0
    }

    add = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    subtract = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    render() {
        return (
            <div className="counter">
                <button className="counter--minus" onClick={this.subtract}>–</button>
                <div className="counter--count">
                    <h1>{this.state.count}</h1>
                </div>
                <button className="counter--plus" onClick={this.add}>+</button>
            </div>
        )
    }
}

/* THIS IS THE FUNCTION VERSION OF THE ABOVE CODE */
// export default function App() {
//     const [count, setCount] = React.useState(0)
    
//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }