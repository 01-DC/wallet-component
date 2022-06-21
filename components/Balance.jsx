import React from "react"

import { FiSend } from "react-icons/fi"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { BsArrow90DegDown, BsArrowDownUp } from "react-icons/bs"
import { SiNextdotjs } from "react-icons/si"

const Balance = ({ balance }) => {
	return (
		<div className="text-center rounded-lg border-2 border-neutral-100 basis-3/5 shrink-0 grow-1 mr-10 mb-10">
			<div className="font-semibold text-5xl">{`\$${balance} USD`}</div>
			<div className="mt-2.5">Available Balance</div>
			<div className="flex justify-center mx-3.5 my-7.5">
				<button className="mx-4.5 my-5 text-sm text-gray-600">
					<div className="bg-slate-800 hover:bg-black rounded-2xl text-white text-2xl mb-2.5 p-4">
						<FiSend />
					</div>
					Send
				</button>
				<button className="mx-4.5 my-5 text-sm text-gray-600">
					<div className="bg-slate-800 hover:bg-black rounded-2xl text-white text-2xl mb-2.5 p-4">
						<BsArrow90DegDown />
					</div>
					Receive
				</button>
				<button className="mx-4.5 my-5 text-sm text-gray-600">
					<div className="bg-slate-800 hover:bg-black rounded-2xl text-white text-2xl mb-2.5 p-4">
						<AiOutlinePlusCircle />
					</div>
					Top Up
				</button>
				<button className="mx-4.5 my-5 text-sm text-gray-600">
					<div className="bg-slate-800 hover:bg-black rounded-2xl text-white text-2xl mb-2.5 p-4">
						<BsArrowDownUp />
					</div>
					Swap
				</button>
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
