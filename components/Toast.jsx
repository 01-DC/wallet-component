import React, { useEffect } from "react"
import { useAppContext } from "../contexts/AppContext"

import { AiOutlineInfoCircle } from "react-icons/ai"

const Toast = () => {
	const { toastList, setToastList } = useAppContext()

	useEffect(() => {
		const interval = setInterval(() => {
			if (toastList.length) {
				setToastList(toastList.slice(1))
			}
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [toastList, setToastList])

	return (
		<div className="fixed bottom-0 right-1/2 translate-x-1/2 z-10 text-center">
			{toastList.map((toast, index) => {
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
