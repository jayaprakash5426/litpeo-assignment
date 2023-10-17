import Options from "./Options";

export default function Products() {
    return (
        <div className="bg-white mx-2 md:mx-12 my-4 rounded-lg  py-4">
            <div className="flex justify-start px-8">
                <h1 className="text-base text-black font-bold md:text-xl">Product Sell</h1>
                <div className="hidden md:block lg:flex items-center space-x-2 ml-auto">
                    <input type="text" className="hidded md:block bg-white py-2 px-4 block w-full border-gray-200 rounded-lg text-sm
                                                    focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700
                                                     dark:text-gray-400" placeholder="Search" />
                    <Options />
                </div>
            </div>
            <div className="flex justify-start mt-6 px-8">
                <h1 className="text-sm">Product Name</h1>
                <div className="hidden md:flex items-center space-x-10  ml-auto justify-between gap-5">
                    <h1 className="text-sm">Stock</h1>
                    <h1 className="text-sm">Price</h1>
                    <h1 className="text-sm">Total Sales</h1>
                </div>
            </div>
            <div className="h-[1px] border bg-gray-200 mt-4 p-0"></div>
            <div className="flex justify-start mt-6 px-8">
                <div className="flex gap-3">
                    <img src="https://source.unsplash.com/landscape/200x100" alt="" className="w-20 h-12 rounded-lg" />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-base font-bold text-black">Abstract 3D</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet, qui minim upidatat.</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center text-black space-x-10  ml-auto justify-start gap-5">
                    <h1 className="text-sm text-black">32 in stock</h1>
                    <h1 className="text-sm">$ 45.99</h1>
                    <h1 className="text-sm">20</h1>
                </div>
            </div>
            <div className="flex justify-start mt-6 px-8">
                <div className="flex gap-3">
                    <img src="https://source.unsplash.com/landscape/200x100" alt="" className="w-20 h-12 rounded-lg" />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-base font-bold text-black">Abstract 3D</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet, qui minim upidatat.</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center text-black space-x-10  ml-auto justify-start gap-5">
                    <h1 className="text-sm text-black">32 in stock</h1>
                    <h1 className="text-sm">$ 45.99</h1>
                    <h1 className="text-sm">20</h1>
                </div>
            </div>
            <div className="flex justify-start mt-6 px-8">
                <div className="flex gap-3">
                    <img src="https://source.unsplash.com/landscape/200x100" alt="" className="w-20 h-12 rounded-lg" />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-base font-bold text-black">Abstract 3D</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet, qui minim upidatat.</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center text-black space-x-10  ml-auto justify-start gap-5">
                    <h1 className="text-sm text-black">32 in stock</h1>
                    <h1 className="text-sm">$ 45.99</h1>
                    <h1 className="text-sm">20</h1>
                </div>
            </div>
            <div className="flex justify-start mt-6 px-8">
                <div className="flex gap-3">
                    <img src="https://source.unsplash.com/landscape/200x100" alt="" className="w-20 h-12 rounded-lg" />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-base font-bold text-black">Abstract 3D</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet, qui minim upidatat.</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center text-black space-x-10  ml-auto justify-start gap-5">
                    <h1 className="text-sm text-black">32 in stock</h1>
                    <h1 className="text-sm">$ 45.99</h1>
                    <h1 className="text-sm">20</h1>
                </div>
            </div>
        </div>
    )
}
