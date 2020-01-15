import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Particles from './Particles.jsx';

export class particles extends Component {
	render() {
		return (
			<div style={{ position: 'fixed', zIndex: '-1', left: '0', top: '0' }}>
				<Particles
					width={window.innerWidth}
					height={document.body.scrollHeight} />
			</div>
		);
	}
}

export default particles;

