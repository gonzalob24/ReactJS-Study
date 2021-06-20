import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (e) => {
		// opens clicked links in a new tab
		if (e.metaKey || e.ctrlKey) {
			return;
		}
		e.preventDefault();
		window.history.pushState({}, "", href);

		// Tells components that url changes
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
