import { Button } from "./ui/button";

export default function RequestDemo() {
    return (
        <>
            <div id="requestDemo" className=" flex gap-40 lg:flex-row flex-col p-56 mb-28 mx-auto max-w-100 justify-between">
                <div className="flex flex-col gap-4 w-1/2">
                    <span className="w-1/3 text-center bg-[#9DC22333] text-[#2e8318] rounded-full py-2 px-12 text-sm font-medium">
                        Community
                    </span>
                    <span>
                        <span className="text-3xl md:text-4xl mb-6 font-[Arial_Rounded_MT_Bold]"><span className="font-bold">Request a <span className="text-[#2D7DD2]">Demo</span></span></span>
                        <p className="mt-4 text-[Arial]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia voluptates dignissimos officiis nam ex nesciunt pariatur magni amet, placeat, sint laborum aspernatur est? Perspiciatis voluptatum quidem similique officiis? Veniam voluptatem soluta accusantium at asperiores impedit, explicabo ducimus perferendis aut molestiae delectus architecto sequi ratione pariatur, dignissimos quaerat mollitia laudantium?</p>
                    </span>
                </div>
                <div className="w-3/4 font-[Arial]">
                    <span className="flex flex-col font-[Arial] gap-3">
                        <label className="font-bold text-black tracking-wider" htmlFor="companySize">Company Size <sup className="text-sm text-red-700">*</sup></label>
                        <select name="companySieze" className="bg-white rounded-md w-full p-2" id="companySize">
                            {/* need to add options */}
                        </select>
                        <label className="font-bold text-black tracking-wider" htmlFor="companyName">Company Name <sup className="text-sm text-red-700">*</sup></label>
                        <input id="companyName" type="text" placeholder="Enter a name" className="p-2 rounded-md" />
                        <span>
                        <span className="flex flex-row gap-8">
                            <span className="flex flex-col gap-2 w-1/2">
                                <label className="font-bold text-black tracking-wider" htmlFor="FirstName">First Name <sup className="text-sm text-red-700">*</sup></label>
                                <input id="companyName" type="text" placeholder="Enter a name" className="p-2 rounded-md" />
                            </span>
                            <span className="flex flex-col gap-2 w-1/2">
                                <label className="font-bold text-black tracking-wider" htmlFor="LastName">Last Name <sup className="text-sm text-red-700">*</sup></label>
                                <input id="companyName" type="text" placeholder="Enter a name" className="p-2 rounded-md" />
                            </span>
                        </span>
                    </span>
                    <span className="flex flex-row gap-8">
                        <span className="flex flex-col gap-2 w-1/2">
                        <label className="font-bold text-black tracking-wider" htmlFor="FirstName">Work Email <sup className="text-sm text-red-700">*</sup></label>
                        <input id="companyName" type="email" placeholder="Enter your email" className="p-2 rounded-md" />
                        </span>
                        <span className="flex flex-col gap-2 w-1/2 ">
                        <label className="font-bold text-black tracking-wider" htmlFor="FirstName">Phone Number <sup className="text-sm text-red-700">*</sup></label>
                        <input id="companyName" type="number" placeholder="123-123-1234" className="p-2 rounded-md" />
                        </span>
                    </span>
                    <label className="font-bold text-black tracking-wider" htmlFor="information" >Can you share some information about your business needs?</label>
                    <textarea placeholder="Enter any relevant information" className="rounded-md p-2 tracking-wider" rows={8} cols={10}></textarea>
                    <Button className="w-1/3 font-bold text-[Arial] text-white text-center mx-auto">Submit Request</Button>
                    </span>
                </div>  
            </div>
        </>
    )
}
