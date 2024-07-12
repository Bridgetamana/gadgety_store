import { LuMapPin, LuTruck, LuCreditCard } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import CheckoutSteps from "../components/CheckoutSteps";


const Step2 = () => {
    return (
        <div className="px-4 py-6 md:px-24">
            <div className="px-4">
                <div className="flex justify-between">
                    <div className="hidden md:flex">
                        <CheckoutSteps icon={LuMapPin} stepNumber={1} stepName="Address" />
                    </div>
                    <CheckoutSteps icon={LuTruck} stepNumber={2} stepName="Shipping" isActive />
                    <CheckoutSteps icon={LuCreditCard} stepNumber={3} stepName="Payment" />
                </div>
                <div className="my-10 mx-auto">
                    <h3 className="text-xl text-[#17183B] mb-4">Shipping payment Address</h3>

                    {/* Mobile view */}
                    <div className="space-y-6 mb-12 md:hidden">

                        <div className="border border-[#D1D1D8] p-5 flex gap-6 max-w-sm md:max-w-4xl rounded-lg">
                            <div>
                                <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                                    <span className="p-2 flex justify-center bg-blue-primary-60 rounded-full"></span>
                                </span>
                            </div>

                            <div className="">
                                <span className="flex justify-between gap-6 items-center mb-4">
                                    <p className="text-wrap">
                                        Regular Shipment
                                    </p>
                                    <p className="text-[#17183B]">
                                        Free
                                    </p>
                                </span>

                                <span className="text-[#17183B]">
                                    <p>17, Oct 2024</p>

                                </span>
                            </div>
                        </div>

                        <div className="border border-[#D1D1D8] p-5 flex gap-6 max-w-sm md:max-w-4xl rounded-lg">
                            <div>
                                <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                                    <span className="p-2 flex justify-center bg-white rounded-full"></span>
                                </span>
                            </div>

                            <div className="md:flex flex-row-reverse justify-between items-start gap-24 lg:gap-72 text-[#99A0AD]">
                                <span className="flex gap-6 items-center mb-4">
                                    <p className="text-wrap">
                                        Regular Shipment
                                    </p>
                                    <p className="">
                                        Free
                                    </p>
                                </span>

                                <span className="">
                                    <p>17, Oct 2024</p>

                                </span>
                            </div>

                        </div>

                        <div className="border border-[#D1D1D8] p-5 flex gap-6 max-w-sm md:max-w-4xl rounded-lg">
                            <div>
                                <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                                    <span className="p-2 flex justify-center bg-white rounded-full"></span>
                                </span>
                            </div>

                            <div className="md:flex flex-row-reverse justify-between items-start gap-24 lg:gap-72 text-[#99A0AD]">
                                <span className="flex gap-6 items-center mb-4">
                                    <p className="text-wrap">
                                        Scheduled Shipment
                                    </p>
                                    <p className="">
                                        Null
                                    </p>
                                </span>

                                <span className="border border-[#99A0AD] py-2 px-3 flex items-center justify-between rounded-md">
                                    <p>Select Date</p>
                                    <FaChevronDown />
                                </span>
                            </div>

                        </div>

                    </div>
                    <div className="md:hidden flex justify-between max-w-sm mx-auto">
                        <button className="border border-blue-primary-60 text-blue-primary-60 py-2.5 px-10 text-center rounded-md">Back</button>
                        <Link to='/step3'>
                            <button className="border border-blue-primary-60  bg-blue-primary-60 text-white py-2.5 px-10 text-center rounded-md">Next</button>
                        </Link>
                    </div>

                    {/* Desktop view */}

                    <div className="hidden md:block space-y-6 mb-12">
                        <div className="text-[#99A0AD] flex justify-between items-center border border-[#D1D1D8] p-5 rounded-lg">
                            <div className="flex gap-6 items-center">
                                <div>
                                    <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                                        <span className="p-2 flex justify-center bg-blue-primary-60 rounded-full"></span>
                                    </span>
                                </div>
                                <p>Free</p>
                                <p>Regular shipment</p>
                            </div>
                            <div>
                                <p>17, Oct 2024</p>
                            </div>
                        </div>
                        <div className="text-[#99A0AD] flex justify-between items-center border border-[#D1D1D8] p-5 rounded-lg">
                            <div className="flex gap-6 items-center">
                                <div>
                                    <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                                        <span className="p-2 flex justify-center bg-white rounded-full"></span>
                                    </span>
                                </div>
                                <p>Free</p>
                                <p>Regular shipment</p>
                            </div>
                            <div>
                                <p>17, Oct 2024</p>
                            </div>
                        </div>
                        <div className="text-[#99A0AD] flex justify-between items-center border border-[#D1D1D8] p-5 rounded-lg">
                            <div className="flex gap-6 items-center">
                                <div>
                                    <span className="flex justify-center p-1.5  rounded-full border border-blue-primary-60">
                                        <span className="p-2 flex justify-center bg-white rounded-full"></span>
                                    </span>
                                </div>
                                <p>Null</p>
                                <p>Scheduled shipment</p>
                            </div>
                            <div>
                                <span className="border border-[#99A0AD] py-2 px-3 flex items-center justify-between rounded-md">
                                    <p>Select Date</p>
                                    <FaChevronDown />
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-end gap-8">
                            <Link to='/step1'>
                            <button className="border border-blue-primary-60 text-blue-primary-60 py-2.5 px-14 text-center rounded-md">Back</button>
                            </Link>
                            <Link to='/step3'>
                                <button className="bg-blue-primary-60 text-white py-2.5 px-14 text-center rounded-md">Next</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Step2