import React, { Component } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes: [] };
        this.createBox = this.createBox.bind(this);
    };

    createBox(newBox) {
        this.setState(old => ({
            boxes: [...old.boxes, newBox]
        }));
    };

    removeBoxes(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
    };

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box width={box.width} height={box.height} color={box.color} key={box.id} id={box.id}
                removeBox={() => this.removeBoxes(box.id)}
            />
        ));

        return (
            <div>
                <h1>Color Box Maker</h1>
                <BoxForm createBox={this.createBox} />
                {boxes}
            </div>
        )
    }
};

export default BoxList;