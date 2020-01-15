import React from "react";
import { rootRouter } from "./router/index";
import 'moment/locale/zh-cn';
import { Style } from "./style";
import { Scrollbars } from 'react-custom-scrollbars';

class App extends React.Component {
  render() {
    return (
      <Style className="App">
        <Scrollbars style={{ width: '100vw', minHeight: '100vh' }}>
          <div>{rootRouter()}</div>
        </Scrollbars>
      </Style>
    );
  }
}

export default App;

