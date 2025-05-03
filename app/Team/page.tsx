export default function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Team</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Led by seasoned professionals with deep expertise in automotive manufacturing and quality systems, our team is committed to precision, performance, and continuous improvement.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>



        <div className="flex flex-wrap -m-4">

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/Images/team/team1.jpg" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Mr. Siddagangappa</h2>
                <h3 className="text-gray-500 mb-3">CEO</h3>
                <p className="mb-4">An industry veteran with 35+ years of experience in automotive manufacturing, specializing in Production, Quality, QMS, 5S, and New Product Development.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/Images/team/team1.png" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Mr. Murali Krishna</h2>
                <h3 className="text-gray-500 mb-3">Plant In-Charge</h3>
                <p className="mb-4">15 years of hands-on experience managing laser cutting and CNC bending operations with precision.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/Images/team/team3.jpg" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">V. S. Meghana</h2>
                <h3 className="text-gray-500 mb-3">Engineer – QA & Accounts</h3>
                <p className="mb-4">Bringing 2 years of experience in MR, quality systems, and financial processes to support operational excellence.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/Images/team/team2.png" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Santhipriya</h2>
                <h3 className="text-gray-500 mb-3">Engineer – Systems</h3>
                <p className="mb-4">Experienced systems engineer with MNC background, contributing to Purchase, Accounts and Operational System.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
