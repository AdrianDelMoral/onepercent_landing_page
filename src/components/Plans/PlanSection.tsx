import { planItems } from "../../data/db";
import PlanItem from "./PlanItem"

export default function PlanSection() {
    
    return (
        <section className="container flex flex-col justify-center items-center mx-auto w-full py-12 md:py-24 lg:py-32">
            <h2 className="text-center text-6xl font-bold mb-16">Planes</h2>
            <div className="container grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-xs lg:max-w-4xl xl:max-w-5xl">
                {planItems.map(planItem => (
                    <div key={planItem.id} className={
                        planItem.id === 2
                            ? "bg-gray-200 text-gray-900 rounded-lg p-8 space-y-6 flex flex-col justify-around px-10"
                            : "bg-gray-200 text-gray-900 rounded-lg p-8 space-y-6 flex flex-col justify-around px-10 my-8"
                    }>
                        <PlanItem
                            planItem={planItem}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}