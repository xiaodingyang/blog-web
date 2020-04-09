import React, { Component } from "react";

class innerHtml extends Component {
  render() {
    return (
      <span
        dangerouslySetInnerHTML={{ __html: this.props.value }}
        style={this.props.style}
      ></span>
    );
  }
}

export default innerHtml;
