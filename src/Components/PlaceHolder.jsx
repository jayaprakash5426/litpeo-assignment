export default function PlaceHolder() {
    return (
        <div className="flex items-center justify-between space-y-2 p-8">
            <h2 className="text-black text-2xl font-normal tracking-tight">Hello Shahrukh,</h2>
            <div className="flex items-center space-x-2">
                <input type="text" className="bg-white py-2 px-4 block w-full border-gray-200 rounded-lg text-sm
                                                    focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700
                                                     dark:text-gray-400" placeholder="Search" />
            </div>
        </div>
    )
}
