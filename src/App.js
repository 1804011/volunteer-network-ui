import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Events from "./Components/Events";
import RequireAuth from "./Components/RequireAuth";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/register"
					element={
						<RequireAuth>
							<Register />
						</RequireAuth>
					}
				></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/events" element={<Events />}></Route>
				<Route path="/admin/*" element={<Admin />}></Route>
			</Routes>
		</div>
	);
}

export default App;
