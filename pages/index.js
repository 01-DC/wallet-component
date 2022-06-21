import React from "react"
import Balance from "../components/Balance"
import ExploreCard from "../components/ExploreCard"
import RecentActivity from "../components/RecentActivity"

export default function Home() {
	return (
		<div className="max-w-[1000px] mx-auto lg:flex">
			<div className="basis-3/5 shrink-0 grow-1">
				<Balance balance={633.83} />
				<RecentActivity />
			</div>
			<div className="basis-2/5 shrink-0 grow-1">
				<ExploreCard />
			</div>
		</div>
	)
}
