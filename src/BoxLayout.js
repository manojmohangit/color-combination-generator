import React, {useState, useEffect} from "react";
import Box from "./Box"

function BoxLayout(props) {
    
    const [colorSet, setColorSet] = useState(Array( Number(props.countBox) ).fill(0).map( (ele, index) => {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                            return randomColor
    }));

    function generateRandomColor(e) {
        if( (e.code !== undefined && e.code === "Space") || e.code === undefined) {
            e.preventDefault();
            e.stopPropagation();
            setColorSet(colorSet.map( function() {
                let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                return randomColor;
            }));
            console.log("Changed");
            return;
        }
    }

    useEffect( () => {
        window.addEventListener('keyup', generateRandomColor);
        return () => {
            window.removeEventListener('keyup', generateRandomColor);
        }
    })
   
    let boxes = colorSet.map((ele, index) => (
        <Box key={index} backgroundColor={ele} width={100/colorSet.length}/>
    ));
   
   return (
        <div>
            {boxes}
        </div>   
    )
}

BoxLayout.defaultProps = {
    countBox: 5
}

export default BoxLayout;