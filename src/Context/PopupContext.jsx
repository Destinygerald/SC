import { useContext, createContext, useState } from "react"

const PopupContext = createContext({})

export function PopupContextFunction () {
	return (
		useContext(PopupContext)
	)
}


export function PopupContextProvider({ children }) {

	const [ open, setOpen ] = useState(false);

	function closedown() {
		setOpen(false)
	}

	function openup() {
		setOpen(true)
	}

	return (
		<PopupContext.Provider value={{open, closedown, openup}}>
			{children}
		</PopupContext.Provider>
	)
}