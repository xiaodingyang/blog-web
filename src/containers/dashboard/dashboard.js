import React, { Component } from "react";
import { childRouter } from "../../router/index";
import Menu from "@/components/Menu/Menu";
import Particles from "@/components/particles";
import { Style } from "./style";
import Footer from "@/components/footer/footer";
import { getImgUrl } from "utils/utils";

export default class Dashboard extends Component {
  state = {
    bg: "",
  };
  componentDidMount() {
    let bg = getImgUrl("appHomeBg")[0];
    this.setState({ bg });
  }
  render() {
    const isIndex =
      window.location.pathname === "/" || window.location.pathname === "/index";
    return (
      <Style>
        <Menu theme="dark" mode="inline"></Menu>
        <div className="router-content">{childRouter()}</div>
        {!isIndex && (
          <div>
            <Footer></Footer> <Particles></Particles>
            <div
              className="app-bg"
              style={{
                background: `url(${this.state.bg}) no-repeat center / cover`,
              }}
            ></div>
          </div>
        )}
      </Style>
    );
  }
}
