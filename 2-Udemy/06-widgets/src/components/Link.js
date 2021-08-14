import React from "react";

const Link = ({ className, href, children }) => {
	// used to prevent full page reload
	// also update the url in browser with built in function in broswer
	const onClick = (e) => {
		e.preventDefault();
		// opens clicked links in a new tab
		if (e.metaKey || e.ctrlKey) {
			return;
		}
		// browser function to update URL
		window.history.pushState({}, "", href);

		// Tells components that URL changed: Look into this and know more about what it does
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};
	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
