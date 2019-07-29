import React, { useState } from "react";
import ReactDOM from "react-dom";
import Source from "./Source";
import Target from "./Target";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./index.css";

const Container = () => {
    const [droppedItem, setDroppedItem] = useState({})
    const onDrop = item => setDroppedItem(item)
    return(
        <div className="App">
          <div className="source">
            <Source name="Block A" id="a" />
            <Source name="Block B" id="b" />
          </div>
          <div className="destination">
            <Target droppedItem={this.state.droppedItem} onDrop={this.onDrop} />
            <Target droppedItem={this.state.droppedItem} onDrop={this.onDrop} />
          </div>
        </div>
    )
}

class Container extends Component {
  constructor() {
    super();
    this.state = {
      droppedItem: {}
    };
  }

  onDrop = (item) =>  {
    this.setState({
      droppedItem: item
    });
  }

  render() {
    return (

    );
  }
}
const ContainerWrapper = DragDropContext(HTML5Backend)(Container);
const rootElement = document.getElementById("root");
ReactDOM.render(<ContainerWrapper />, rootElement);
