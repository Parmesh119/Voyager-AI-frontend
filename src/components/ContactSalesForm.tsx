import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RequestDemoForm() {
    const location = useLocation();

    useEffect(() => {
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] mx-auto rounded-lg w-full max-w-[1000px] mt-4 lg:mt-8 p-0 lg:p-8" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col">
                    <motion.div
                        className="bg-[#E8F5D2] text-[#2e8318] rounded-full py-1 px-10 text-xs font-medium w-fit mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Learn More
                    </motion.div>
                    <motion.h2
                        className="text-2xl font-bold mb-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="font-[Arial_Rounded_MT_Bold]">Contact <span className="text-[#2D7DD2]">Sales</span></span>
                    </motion.h2>
                    <motion.div
                        className="text-gray-700 text-xs leading-5 font-[Arial]"
                        style={{ fontSize: '12px' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Vivamus faucibus commodo lorem id euismod.<br />
                        Pellentesque eleifend, mi in volutpat posuere, quam nulla<br />
                        imperdiet neque, in pulvinar leo lacus quis purus. Duis<br />
                        pellentesque porttitor lectus, ornare tincidunt justo<br />
                        aliquam suscipit. Phasellus a velit laoreet, bibendum nisi<br />
                        non, bibendum ipsum. Vestibulum ante ipsum primis in<br />
                        faucibus orci luctus et ultrices posuere cubilia curae;<br />
                        Proin accumsan tempor dictum. Duis egestas, lorem<br />
                        vestibulum dignissim dignissim, libero lorem<br />
                        condimentum augue, nec lacinia odio massa sit amet<br />
                        odio. Curabitur ac tincidunt neque. Vestibulum<br />
                    </motion.div>
                </div>

                <div className="p-8 md:p-12">
                    <motion.form
                        className="flex flex-col gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            <label className="block text-xs mb-1 font-bold" htmlFor="companySize">
                                Company Size<span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="companySize"
                                    id="companySize"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded appearance-none bg-white text-sm"
                                >
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="1-10">1-10 employees</option>
                                    <option value="11-50">11-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="201-500">201-500 employees</option>
                                    <option value="501+">501+ employees</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <ChevronDown size={16} className="text-gray-500" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            <label className="block text-xs mb-1 font-bold" htmlFor="companyName">
                                Company Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                id="companyName"
                                type="text"
                                required
                                placeholder="Enter a name"
                                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                            />
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        >
                            <div>
                                <label className="block text-xs mb-1 font-bold" htmlFor="firstName">
                                    First Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    required
                                    placeholder="Enter a name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs mb-1 font-bold" htmlFor="lastName">
                                    Last Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    required
                                    placeholder="Enter a name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        >
                            <div>
                                <label className="block text-xs mb-1 font-bold" htmlFor="workEmail">
                                    Work Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="workEmail"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs mb-1 font-bold" htmlFor="phoneNumber">
                                    Phone Number<span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="phoneNumber"
                                    type="tel"
                                    required
                                    placeholder="123-123-1234"
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-1"
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <label className="block text-xs mb-1 font-bold" htmlFor="information">
                                Can you share some information about your business needs?
                            </label>
                            <textarea
                                id="information"
                                placeholder="Enter any relevant information"
                                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                                rows={4}
                            ></textarea>
                        </motion.div>

                        <motion.div
                            className="flex justify-center"
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        >
                            <motion.button
                                type="submit"
                                className="bg-[#0077CC] font-bold text-white px-5 py-2 rounded text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit Request
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}