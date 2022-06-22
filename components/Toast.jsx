import React, { useEffect } from "react"

import { AiOutlineInfoCircle } from "react-icons/ai"

const Toast = ({ toasts, setToasts }) => {
	useEffect(() => {
		const interval = setInterval(() => {
			if (toasts.length) {
				setToasts(toasts.slice(1))
			}
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [toasts, setToasts])

	return (
		<div className="fixed bottom-0 right-1/2 translate-x-1/2 z-10">
			{toasts.map((toast, index) => {
				return (
					<div
						key={index}
						className={`${toast.bgColor} text-white p-3.5 mb-3 rounded-3xl text-sm font-semibold animate-slide-up`}>
						<AiOutlineInfoCircle
							style={{
								display: "inline",
								fontSize: "18px",
								marginRight: "6px",
							}}
						/>
						{toast.description}
					</div>
				)
			})}
		</div>
	)
}

export default Toast
