import Options from "./Options";
import Overview from "./Overview";

export default function OverviewSection() {
    return (
        <div className="flex flex-wrap justify-center gap-3 p-4 md:p-8">
            <div className="hidden md:block bg-white rounded-lg basis-9/12 p-4">
                <div className="flex justify-around p-4">
                    <h2 className="mr-auto text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                        Overview
                    </h2>
                    <Options/>
                </div>
                <Overview />
            </div>
            <div className="basis-full bg-white rounded-lg md:basis-1/5 p-4 flex flex-col md:gap-1 justify-around">
                <div className="mb-auto">
                    <h1 className="text-black text-xl font-bold">Customers</h1>
                    <h1 className="text-gray-400 text-sm font-normal">Customers that buy products</h1>
                </div>
                <div className="radial-progress text-blue-500 items-center my-16 mx-auto" style={{ "--value": "65", "--size": "15rem", "--thickness": "2rem" }}>65%</div>
            </div>
        </div>
    )
}
