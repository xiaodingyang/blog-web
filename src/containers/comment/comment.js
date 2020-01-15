import React, { Component } from 'react';
import TopDisplay from "@/components/topDisplay";
import { Style } from "./style";
export class comment extends Component {
    componentDidMount() {
        (function (d, s) {
            var j, e = d.getElementsByTagName(s)[0];
            if (typeof LivereTower === "function") {
                return;
            }
            j = d.createElement(s);
            j.src = "https://cdn-city.livere.com/js/embed.dist.js";
            j.async = true;
            e.parentNode.insertBefore(j, e);
        })(document, "script");
    }
    render() {
        return (
            <Style>
                <div className="container">
                <TopDisplay></TopDisplay>
                <div className="comment">
                    <div id="lv-container" data-id="city" data-uid="MTAyMC80NzU1OS8yNDA1OQ=="></div>
                </div>
                </div>
                
            </Style>
        );
    }
}

export default comment;
