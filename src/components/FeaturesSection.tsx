export function FeaturesSection() {
  return (
    <section className="w-full py-32 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] ">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
              Intelligent Features
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Proven Performance.
              <br />
              <span className="text-[#2D7DD2]">Accelerate.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div>
                <div className="text-4xl font-extrabold text-[#2D7DD2] mb-2">200X</div>
                <div className="font-semibold mb-2 text-sm">Faster Audits</div>
                <p className="text-gray-600 text-sm">
                  Experience significantly reduced audit times with automated data analysis and reporting.
                </p>
              </div>

              <div>
                <div className="text-4xl font-extrabold text-[#2D7DD2] mb-2">90%</div>
                <div className="text-sm font-semibold mb-2">Reduced Costs</div>
                <p className="text-gray-600 text-sm">
                  Optimize your compliance budget with AI-driven automation and streamlined workflows.
                </p>
              </div>

              <div>
                <div className="text-4xl font-extrabold text-[#2D7DD2] mb-2">99%</div>
                <div className="text-sm font-semibold mb-2">Increased Accuracy</div>
                <p className="text-gray-600 text-sm">
                  Benefit from highly accurate results driven by AI algorithms that minimize human error.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 ">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://i0.wp.com/spacenews.com/wp-content/uploads/2024/06/voyager-illus.jpg?resize=1200%2C1080&quality=89&ssl=1"
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