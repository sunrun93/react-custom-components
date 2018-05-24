import React from 'react';
import ReactDOM from 'react-dom';

class Layer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.renderLayer();
    }
    componentDidUpdate() {
        this.renderLayer();
    }
    componentWillUnmount() {
        this.removeLayer();
    }
    renderLayer() {
        if (!this.props.open) {
            this.removeLayer()
        } else {
            if (!this.layer) {
                this.layer = document.createElement("div");
            }
            ReactDOM.unstable_renderSubtreeIntoContainer(document, this.props.children, this.layer);
        }
    }
    removeLayer() {
        if (!this.layer) {
            return;
        }
        ReactDOM.unmountComponentAtNode(this.layer);
        document.body.removeChild(this.layer);
        this.layer = null;
    }
    render() {
        return null
    }
}
export default Layer;