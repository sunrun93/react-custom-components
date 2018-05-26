import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Layer.css';

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
                this.layer.className = styles.layer;

                document.body.appendChild(this.layer);
            }
            ReactDOM.unstable_renderSubtreeIntoContainer(this, this.props.children, this.layer);
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
        return null;
    }
}
export default Layer;