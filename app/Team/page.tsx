export default function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Led by seasoned professionals with deep expertise in automotive manufacturing and quality systems, our team is committed to precision, performance, and continuous improvement.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Mr. Siddagangappa</h2>
                <h3 className="text-gray-500 mb-3">CEO</h3>
                <p className="mb-4">35+ years in automotive industry covering QMS, NPD, and quality. A pioneer in lean manufacturing and systems implementation.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Mr. Murali Krishna</h2>
                <h3 className="text-gray-500 mb-3">Plant In-Charge</h3>
                <p className="mb-4">15 years of hands-on experience managing laser cutting and CNC bending operations with precision.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">V. S. Meghana</h2>
                <h3 className="text-gray-500 mb-3">Engineer – QA & Accounts</h3>
                <p className="mb-4">Bringing 2 years of experience in MR, quality systems, and financial processes to support operational excellence.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Santhipriya</h2>
                <h3 className="text-gray-500 mb-3">Engineer – Systems</h3>
                <p className="mb-4">Experienced systems engineer with MNC background, contributing to technical and operational infrastructure.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
