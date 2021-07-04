import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

const Modal = () => {
	//the return value is a bit different,
	// 1, jasx,
	// 2. reference to elelemt I want to render to, use an id value.
	//  in index.html add a sibling root
	return ReactDOM.createPortal(
		<div class="modal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Modal title</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						<p>Modal body text goes here.</p>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button type="button" class="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>,
		document.querySelector("#modals")
	);
};

export default Modal;
