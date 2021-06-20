import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	useEffect(() => {
		const onLocationChange = () => {
			// this gets Rout component to rerender
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener("popstate", onLocationChange);

		return () => {
			window.removeEventListener("popstate", onLocationChange);
		};
	}, []);

	return currentPath === path ? children : null;
};

export default Route;
