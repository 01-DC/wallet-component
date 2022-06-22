import React, { createContext, useContext, useState } from "react"

const StateContext = createContext()

export const AppContext = ({ children }) => {
	const [toastList, setToastList] = useState([])

	const showToast = (desc, color) => {
		const newToast = { description: `${desc}`, bgColor: `${color}` }
		setToastList([...toastList, newToast])
	}

	return (
		<StateContext.Provider
			value={{
				toastList,
				setToastList,
				showToast,
			}}>
			{children}
		</StateContext.Provider>
	)
}

export const useAppContext = () => useContext(StateContext)
