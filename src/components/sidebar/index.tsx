"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";

interface Props {}

const MenuOptions = (props: Props) => {
	const pathName = usePathname();
	return (
		<nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
			<div className="flex items-center justify-center flex-col gap-8">
				<Link
					className="flex font-bold flex-row"
					href="#"
				>
					fuzzie.
				</Link>
				<TooltipProvider>
					{menuOptions.map((menuItem) => (
						<ul key={menuItem.name}>
							<Tooltip delayDuration={0}>
								<TooltipTrigger>
									<li>
										<Link
											href={menuItem.href}
											className={clsx(
												"group h-8 w-8 flex items-center justify-center scale=[1.5] rounded-lg p-[3px] cursor-pointer ",
												{
													"dark:bg-[]#2f006b bg-[#eee0ff]":
														pathName === menuItem.href,
												},
											)}
										>
											<menuItem.Component
												selected={pathName === menuItem.href}
											/>
										</Link>
									</li>
								</TooltipTrigger>
							</Tooltip>
						</ul>
					))}
				</TooltipProvider>
			</div>
		</nav>
	);
};
export default MenuOptions;