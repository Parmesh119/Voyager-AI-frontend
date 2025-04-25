export function FeaturesSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div className="inline-block mb-4 px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
              Intelligent Features
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Proven Performance.
              <br />
              <span className="text-[#2D7DD2]">Accelerate.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div>
                <div className="text-3xl font-bold text-[#2D7DD2] mb-2">200X</div>
                <div className="text-lg font-semibold mb-2">Faster Audits</div>
                <p className="text-gray-600">
                  Experience significantly reduced audit times with automated data analysis and reporting.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-[#2D7DD2] mb-2">90%</div>
                <div className="text-lg font-semibold mb-2">Reduced Costs</div>
                <p className="text-gray-600">
                  Optimize your compliance budget with AI-driven automation and streamlined workflows.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-[#2D7DD2] mb-2">99%</div>
                <div className="text-lg font-semibold mb-2">Increased Accuracy</div>
                <p className="text-gray-600">
                  Benefit from highly accurate results driven by AI algorithms that minimize human error.
                </p>
              </div>
            </div>
          </div>



          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://d2pn8kiwq2w21t.cloudfront.net/images/1-Voyager_2-copy.width-1320.jpg"
                alt="Space technology"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// interface MetricProps {
//   value: string;
//   color: string;
//   title: string;
//   description: string;
// }

// function Metric({ value, color, title, description }: MetricProps) {
//   return (
//     <div>
//       <div className="flex items-baseline gap-3 mb-1">
//         <span className="text-4xl font-bold" style={{ color }}>
//           {value}
//         </span>
//         <span className="text-lg font-medium text-gray-800">
//           {title}
//         </span>
//       </div>
//       <p className="text-gray-600 max-w-md">
//         {description}
//       </p>
//     </div>
//   );
// }