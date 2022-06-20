import React from "react"
import Balance from "../components/Balance"
import ExploreCard from "../components/ExploreCard"
import RecentActivity from "../components/RecentActivity"

export default function Home() {
	return (
		<div className="max-w-[1000px] mx-auto">
			<div>
				<Balance balance={633.83} />
				{/* <RecentActivity /> */}
			</div>
			<div>{/* <ExploreCard /> */}</div>
		</div>
	)
}
