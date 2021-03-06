import React from "react"
import Balance from "../components/Balance"
import ExploreCard from "../components/ExploreCard"
import RecentActivity from "../components/RecentActivity"
import Toast from "../components/Toast"

export default function Home() {
	return (
		<div className="max-w-[968px] mx-auto lg:flex gap-3.75">
			<div className="flex flex-col gap-3.75 basis-2/3 shrink-0">
				<Balance balance={633.83} />
				<RecentActivity />
			</div>
			<div className="">
				<ExploreCard />
			</div>
			<Toast />
		</div>
	)
}
