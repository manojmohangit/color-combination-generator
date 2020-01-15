import React from "react";
import Box from "./Box"

export default class BoxLayout extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.generateRandomColor = this.generateRandomColor.bind(this);
        this.state = {
            colorSet: Array(Number(this.props.countBox)).fill(0).map((ele, index) => {
                            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                            return randomColor
                    })
        }
    }

    static defaultProps = {
        countBox: 5
    }

    componentDidMount = function() {
        window.addEventListener('keyup', this.generateRandomColor);
    }

    generateRandomColor(e) {
        if( (e.code !== undefined && e.code === "Space") || e.code === undefined) {
            e.preventDefault();
            e.stopPropagation();
            let newState = Object.assign({}, this.state);
            newState.colorSet = newState.colorSet.map( function() {
                let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                return randomColor;
            })
            this.setState(newState);
            return;
        }
    }

    render() {
        let boxes = this.state.colorSet.map((ele, index) => (
            <Box key={index} backgroundColor={ele} width={100/this.state.colorSet.length}/>
        ));
        return (
            <div>
                {boxes}
            </div>
        )
    }
}