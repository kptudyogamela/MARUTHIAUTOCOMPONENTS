import Image from 'next/image';

export default function Certification() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"> Certifications & Quality Commitment</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Discover our dedication to excellence through globally recognized certifications, ensuring unmatched quality and customer trust.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        {/* ISO Certificate Preview */}
        <div className="flex justify-center mb-12">
          <div className="border-4 border-gray-300 rounded-lg shadow-lg overflow-hidden w-[300px] sm:w-[400px]">
            <Image
              src="/Images/certificate1.png"
              alt="ISO Certificate"
              width={400}
              height={500}
              className="object-cover"
            />
            <p className="text-sm text-gray-600 mt-2">ISO Certified until July 2025</p>
          </div>
        </div>

        {/* Icons + Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <div className="text-4xl mb-4 text-red-600">✅</div>
            <h3 className="text-xl font-semibold mb-2">Zero Defect Goal</h3>
            <p className="text-gray-600">
              We strive to maintain 0 PPM in internal and customer-facing rejections through strict quality checks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <div className="text-4xl mb-4 text-yellow-500">🧹</div>
            <h3 className="text-xl font-semibold mb-2">5S Workplace</h3>
            <p className="text-gray-600">
              Our team follows 5S practices to ensure safety, efficiency, and organization on the shop floor.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <div className="text-4xl mb-4 text-green-500">📈</div>
            <h3 className="text-xl font-semibold mb-2">Kaizen Philosophy</h3>
            <p className="text-gray-600">
              Continuous improvement through small, incremental changes is a part of our daily review culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
