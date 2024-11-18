export default function Faq() {
    return (
        <div className="p-8">
            <div className="p-4 py-8 mt-12 rounded-lg shadow-xl">
                <h4 className="text-4xl font-extrabold tracking-tight text-center text-gray-900">FAQ</h4>
                <p className="mt-2 text-sm text-center text-gray-600">Here are some of the frequently asked questions</p>
                <div className="px-2 mt-12 space-y-12 xl:px-16">
                    <div className="flex mt-4">
                        <div>
                            <div className="flex items-center h-16 border-l-4 border-blue-600">
                                <span className="px-4 text-4xl text-blue-600">Q.</span>
                            </div>
                            <div className="flex items-center h-16 border-l-4 border-gray-400">
                                <span className="px-4 text-4xl text-gray-400">A.</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center h-16">
                                <span className="text-lg font-bold text-blue-600">Lorem ipsum dolor sit amet?</span>
                            </div>
                            <div className="flex items-center py-2">
                                <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div>
                            <div className="flex items-center h-16 border-l-4 border-blue-600">
                                <span className="px-4 text-4xl text-blue-600">Q.</span>
                            </div>
                            <div className="flex items-center h-16 border-l-4 border-gray-400">
                                <span className="px-4 text-4xl text-gray-400">A.</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center h-16">
                                <span className="text-lg font-bold text-blue-600">Lorem ipsum dolor sit amet?</span>
                            </div>
                            <div className="flex items-center py-2">
                                <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div>
                            <div className="flex items-center h-16 border-l-4 border-blue-600">
                                <span className="px-4 text-4xl text-blue-600">Q.</span>
                            </div>
                            <div className="flex items-center h-16 border-l-4 border-gray-400">
                                <span className="px-4 text-4xl text-gray-400">A.</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center h-16">
                                <span className="text-lg font-bold text-blue-600">Lorem ipsum dolor sit amet?</span>
                            </div>
                            <div className="flex items-center py-2">
                                <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                            </div>
                        </div>
                    </div>

                    {/* Repeat the above structure for other FAQ items */}

                </div>
            </div>
        </div>
    )
}