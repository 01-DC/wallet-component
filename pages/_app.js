import "../styles/globals.css"
import { AppContext } from "../contexts/AppContext"

function MyApp({ Component, pageProps }) {
	return (
		<AppContext>
			<Component {...pageProps} />
		</AppContext>
	)
}

export default MyApp
