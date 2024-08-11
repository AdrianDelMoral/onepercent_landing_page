import { formatCurrency } from "../../helpers"
import { PlanItems } from "../../types"

type PlansProps = {
    planItem: PlanItems
}

export default function PlanItem({ planItem }: PlansProps) {
    const { options } = planItem
    return (
        <>
            <h2 className="text-3xl font-extrabold uppercase text-center">{planItem.title}</h2>
            <ul className="list-disc uppercase font-semibold">
                {options.map(option =>
                    <li key={option}>
                        {option}
                    </li>
                )}
            </ul>
            <a
                rel="noopener noreferrer"
                href={planItem.linkto}
                className="mx-8 bg-black rounded-xl text-xl font-bold text-center text-gray-200 py-3 cursor-pointer hover:bg-blue-300 hover:text-gray-900 transition-all"
            >
                {formatCurrency(planItem.price)}/mes
            </a>
        </>
    )
}