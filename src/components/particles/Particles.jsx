import React, { Component, PropTypes } from 'react';
import Particles from './Particles.js';

export default class ParticlesComponent extends Component {
	static defaultProps = {
		width: 200,
		height: 200,
		particles: {
			particlesNumber: 100,
			linkDist: 70,
			createLinkDist: 100,
			disableLinks: false,
			disableMouse: false,
			background: 'transparent',
			color: '#fff',
			linksWidth: 0.5,
		},

		particle: {
			color: '#fff',
			minSize: 3,
			maxSize: 5,
			speed: 10,
		}
	}

	constructor(props) {
		super(props);

		this.props.particles.particle = this.props.particle;
		this.props.particles.width = this.props.width;
		this.props.particles.height = this.props.height;
	}

	state = {
		particles: {
			resize: function () { }
		}
	}

	componentDidMount() {
		var particles = new Particles(this.refs.canvas, this.props.particles);
		this.setState({
			particles,
		});
	}

	componentWillReceiveProps(nextProps) {
		var { width, height } = nextProps;

		if (this.props.width !== width || this.props.height !== height) {
			this.state.particles.resize(width, height);
		}
	}

	componentWillUnmount() {
		this.state.particles.remove();
	}

	setParams() {

	}


	render() {
		const width = document.body.clientWidth
		if (width <= 479) {
			this.props.particles.createLinkDist = 30
			this.props.particles.particlesNumber = 40
		} else if (width > 479 && width < 1200) {
			this.props.particles.createLinkDist = 50
			this.props.particles.particlesNumber = 70
		} else if (width > 1200 && width < 1920) {
			this.props.particles.createLinkDist = 70
			this.props.particles.particlesNumber = 100
		} else {
			this.props.particles.createLinkDist = 100
			this.props.particles.particlesNumber = 150
		}
		document.addEventListener('mousemove', this.state.particles.onMouseMove)
		document.addEventListener('mouseleave', this.state.particles.onMouseLeave)
		document.addEventListener('mouseenter', this.state.particles.onMouseEnter)
		return (
			<canvas
				className='Particles'
				ref='canvas' />
		);
	}
}
