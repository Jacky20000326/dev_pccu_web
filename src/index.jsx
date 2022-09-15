import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyled } from "./components/componentStyled/GlobalStyled";
import { BrowserRouter as Router } from "react-router-dom";


// 設定全域所需要使用的主題樣式
import { ThemeProvider } from "styled-components";
// 取得所有Reducer
import { store } from "./Store/index.js"
import { Provider } from "react-redux";



// mobile
const Theme = {
	w_900: {
		w: "900px",
		padding: "0px 50px 0px 50px",
		title_fs: "28px"
	},
	w_576: {
		w: "576px",
		padding: "0px 10px 0px 10px"
	}

}

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={Theme}>
			<React.StrictMode>
				<Router>
					<GlobalStyled />
					<App />
				</Router>
			</React.StrictMode>
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);
