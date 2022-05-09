import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Events from "./Components/Events";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/events" element={<Events />}></Route>
				<Route path="/admin/*" element={<Admin />}></Route>
			</Routes>
		</div>
	);
}

export default App;
