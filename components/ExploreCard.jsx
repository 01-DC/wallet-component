import React from "react"
import { useAppContext } from "../contexts/AppContext"

const ExploreCard = () => {
	const { showToast } = useAppContext()

	return (
		<div className="text-center bg-black text-white rounded-lg py-7.5 px-6">
			<h2 className="font-black text-xl my-4">{"What's on NEAR?"}</h2>
			<p className="mb-4 text-sm text-gray-200">
				{
					"Earn, mint, and play! Discover the ecosystem of NEAR applications."
				}
			</p>
			<div className="flex justify-between gap-2">
				<button
					className="basis-1/2 text-sm text-blue-300 font-semibold rounded-4xl mt-9 py-4 border-2 border-gray-700 bg-gray-700 hover:bg-black transition"
					onClick={() => showToast("Explore Apps", "bg-black")}>
					{"Explore Apps"}
				</button>
				<button
					className="basis-1/2 text-sm text-blue-300 font-semibold rounded-4xl mt-9 px-7 py-4 border-2 border-gray-700 bg-gray-700 hover:bg-black transition"
					onClick={() => showToast("Explore DeFi", "bg-blue-800")}>
					{"Explore DeFi"}
				</button>
			</div>
		</div>
	)
}

export default ExploreCard
