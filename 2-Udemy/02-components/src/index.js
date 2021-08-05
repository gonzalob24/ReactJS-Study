import React from "react";
import ReactDOM from "react-dom";

// faker
import faker from "faker";

// components
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

/*
If I find myself duplicating divs or some code, think about using a component instead
*/
const App = () => {
	return (
		<div>
			<ApprovalCard>
				<CommentDetail
					author="Gonzalo"
					timeAgo="Today at 4:45PM"
					comment="First Post"
					image={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alexa"
					timeAgo="Today at 2:45PM"
					comment="Yes lets fo run!"
					image={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Maria"
					timeAgo="Today at 1:15PM"
					comment="Hay Alexa!!"
					image={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

const rootApp = document.querySelector("#root");

ReactDOM.render(<App />, rootApp);
