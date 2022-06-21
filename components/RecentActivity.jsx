import React from "react"

import { FiKey } from "react-icons/fi"
import { VscAccount } from "react-icons/vsc"
import { BsArrow90DegDown } from "react-icons/bs"

const RecentActivity = () => {
	return (
		<div className="text-center rounded-lg border border-neutral-100 p-5">
			<h2 className="font-black text-xl mb-4">{"Recent Activity"}</h2>

			{/* One row of info */}
			<div className="flex justify-between items-center px-5 py-4 border-y border-neutral-100 -mx-5 hover:bg-neutral-100 transition cursor-pointer">
				<div className="flex items-center">
					<div className="text-2xl text-green-600 rounded-full border border-neutral-100 p-2">
						<FiKey />
					</div>
					<div className="ml-3.5 text-left">
						<p className="text-sm font-bold">
							{"Access Key added"}
						</p>
						<p className="text-sm">
							<span className="text-gray-400">{"for"}</span>{" "}
							{"01_dc.testnet"}
						</p>
					</div>
				</div>
				<div className="text-right">
					<p className="text-sm text-gray-400">{"1d"}</p>
				</div>
			</div>

			{/* One row of info */}
			<div className="flex justify-between items-center px-5 py-4 border-y border-neutral-100 -mx-5 hover:bg-neutral-100 transition cursor-pointer">
				<div className="flex items-center">
					<div className="text-2xl text-blue-600 rounded-full border border-neutral-100 p-2">
						<VscAccount />
					</div>
					<div className="ml-3.5 text-left">
						<p className="text-sm font-bold">
							{"New account created"}
						</p>
						<p className="text-sm">
							<span className="text-gray-400">{"account"}</span>{" "}
							{"01_dc.testnet"}
						</p>
					</div>
				</div>
				<div className="text-right">
					<p className="text-sm text-gray-400">{"1d"}</p>
				</div>
			</div>

			{/* One row of info */}
			<div className="flex justify-between items-center px-5 py-4 border-y border-neutral-100 -mx-5 hover:bg-neutral-100 transition cursor-pointer">
				<div className="flex items-center">
					<div className="text-2xl text-green-600 rounded-full border border-neutral-100 p-2">
						<BsArrow90DegDown />
					</div>
					<div className="ml-3.5 text-left">
						<p className="text-sm font-bold">{"Received NEAR"}</p>
						<p className="text-sm">
							<span className="text-gray-400">{"from"}</span>{" "}
							{"testnet"}
						</p>
					</div>
				</div>
				<div className="text-right">
					<p className="text-sm font-bold text-green-600">
						{"+200 NEAR"}
					</p>
					<p className="text-sm text-gray-400">{"1d"}</p>
				</div>
			</div>

			{/* One row of info */}
			<div className="flex justify-between items-center px-5 py-4 border-y border-neutral-100 -mx-5 hover:bg-neutral-100 transition cursor-pointer">
				<div className="flex items-center">
					<div className="text-2xl text-green-600 rounded-full border border-neutral-100 p-2">
						<FiKey />
					</div>
					<div className="ml-3.5 text-left">
						<p className="text-sm font-bold">
							{"Access Key added"}
						</p>
						<p className="text-sm">
							<span className="text-gray-400">{"for"}</span>{" "}
							{"01_dc.testnet"}
						</p>
					</div>
				</div>
				<div className="text-right">
					<p className="text-sm text-gray-400">{"1d"}</p>
				</div>
			</div>

			<button className="w-full text-sm text-blue-600 font-semibold rounded-4xl mt-9 py-4 border-2 border-neutral-100 bg-neutral-100 hover:bg-white transition">
				{"View All"}
			</button>
		</div>
	)
}

export default RecentActivity
