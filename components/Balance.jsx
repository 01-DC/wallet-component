import React, { useState } from "react"

import { SiNextdotjs } from "react-icons/si"
import { AiOutlineInfoCircle } from "react-icons/ai"

const Balance = ({ balance }) => {
	const [showTooltip, setShowTooltip] = useState(true)
	return (
		<div className="text-center rounded-lg border border-neutral-100 py-4">
			<div className="font-bold text-5xl">{`\$${balance} USD`}</div>

			<div className="relative text-sm text-gray-600 mt-2.5">
				{"Available Balance"}
				{showTooltip && (
					<div className="absolute right-1/3 bottom-full w-56 leading-5 rounded-md bg-black text-white text-xs p-1.5">
						<p>
							{
								"Your spendable NEAR balance excluding funds locked or staked."
							}
						</p>
						<a href="" className="underline">
							{"View Balance Breakdown"}
						</a>
					</div>
				)}
				<div
					className="inline ml-2 hover:text-blue-600"
					onPointerEnter={() => setShowTooltip(true)}
					onPointerLeave={() =>
						setTimeout(() => setShowTooltip(false), 1000)
					}>
					<AiOutlineInfoCircle
						style={{ display: "inline", fontSize: "16px" }}
					/>
				</div>
			</div>

			<div className="flex justify-between text-sm text-gray-600 px-5 mt-5 mb-4">
				<p>Your Portfolio</p>
				<p>Token Balance</p>
			</div>
			<div className="py-4 px-3.5 border-y border-neutral-100">
				<div className="flex justify-between">
					<div className="inline-flex items-center">
						<SiNextdotjs style={{ fontSize: "28px" }} />
						<div className="ml-3.5">
							<p className="font-bold">{"NEAR"}</p>
							<p className="text-sm text-gray-600 mt-1.5">
								{"$3.25"}
							</p>
						</div>
					</div>
					<div>
						<p className="font-bold">{"199.94732 NEAR"}</p>
						<p className="text-sm text-gray-600 mt-1.5">{`≈ \$${balance} USD`}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Balance
