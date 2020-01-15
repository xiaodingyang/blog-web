import React, { Component } from 'react';
import { Style } from "./style";
export class rain extends Component {
    render() {
        return (
            <Style>
                <div className="rain">
                    <div className='window' style={{ background: `url(${this.props.bg}) no-repeat center/cover` }}></div>
                    <div className='raindrops'>
                        <div className="borders">
                            {
                                [...Array(50).keys()].map(item => <div key={item} className='border'></div>)
                            }
                        </div>
                        <div className="drops">
                            {
                                [...Array(50).keys()].map(item => <div key={item} className='raindrop' style={{ background: 'rgba(255,255,255,.2)' }}></div>)
                            }
                        </div>
                    </div>
                </div>
            </Style>
        );
    }
}

export default rain;
