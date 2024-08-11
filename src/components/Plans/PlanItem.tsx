import { formatCurrency } from "../../helpers"
import { PlanItems } from "../../types"

type PlansProps = {
    planItem: PlanItems
}

export default function PlanItem({ planItem }: PlansProps) {
    const { options } = planItem
    return (
        <>
            <h2 className="text-3xl lg:text-xl xl:text-3xl font-extrabold uppercase text-center">{planItem.title}</h2>
            <ul className="list-disc list-inside uppercase font-semibold">
                {options.map(option =>
                    <li key={option} className="text-sm xl:text-base">
                        {option}
                    </li>
                )}
            </ul>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={planItem.linkto}
                className="mx-8 bg-black rounded-xl text-xl lg:text-lg xl:text-xl font-bold text-center text-gray-200 py-3 cursor-pointer hover:bg-blue-300 hover:text-gray-900 transition-all"
            >
                {formatCurrency(planItem.price)}/mes
            </a>
        </>
    )
}