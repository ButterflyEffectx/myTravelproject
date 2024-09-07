
function Client() {
    return (
        <>
            <div className="p-8">
                <h2 className="text-2xl text-white font-bold text-center mb-8">What Our Clients Say</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">บริการยอดเยี่ยมและรวดเร็วมาก!</p>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="client1.jpg" alt="Client 1"/>
                                <div>
                                    <p className="text-sm font-semibold">John Doe</p>
                                    <p className="text-sm text-gray-500">CEO, Company</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">ทำงานอย่างมืออาชีพและเข้าใจความต้องการของลูกค้า</p>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="client2.jpg" alt="Client 2"/>
                                <div>
                                    <p className="text-sm font-semibold">Jane Smith</p>
                                    <p className="text-sm text-gray-500">CTO, Another Company</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">ประสบการณ์ที่ยอดเยี่ยม! ขอบคุณทีมงาน</p>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="client3.jpg" alt="Client 3"/>
                                <div>
                                    <p className="text-sm font-semibold">Sam Wilson</p>
                                    <p className="text-sm text-gray-500">COO, Example Co.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Client