import React from "react"

import { SiNextdotjs } from "react-icons/si"

const Balance = ({ balance }) => {
	return (
		<div className="text-center rounded-lg border border-neutral-100 py-4">
			<div className="font-bold text-5xl">{`\$${balance} USD`}</div>
			<div className="mt-2.5">{"Available Balance"}</div>
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
