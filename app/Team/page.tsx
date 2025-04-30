import Image from "next/image";
const teamMembers = [
  {
    name: "Sathyanarayana N",
    role: "Managing Partner",
    description: "Mechanical Engineer with over 35 years of experience in the auto components industry. Leads operations and strategy at MAC.",
    image: "/Images/1.jpg",
  },
  {
    name: "Dr. Chaitra S",
    role: "Partner",
    description: "PhD in Biochemistry with strong analytical skills and operational insight. Supports organizational planning and development.",
    image: "/Images/1.jpg",
  },
  {
    name: "Ashwitha S",
    role: "Partner",
    description: "B.E. in Electronics & Communication with experience in systems and coordination. Focuses on process implementation and client communications.",
    image: "/Images/1.jpg",
  },
  {
    name: "Raghavendra",
    role: "Production Head",
    description: "Oversees production activities, ensures quality standards, and maintains timelines to meet customer expectations.",
    image: "/Images/1.jpg",
  },
];


export default function Team() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Led by seasoned professionals with deep expertise in automotive manufacturing and quality systems, our team is committed to precision, performance, and continuous improvement.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">

          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">Mr. Siddagangappa</h2>
                <h3 class="text-gray-500 mb-3">CEO</h3>
                <p class="mb-4">35+ years in automotive industry covering QMS, NPD, and quality. A pioneer in lean manufacturing and systems implementation.</p>
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">Mr. Murali Krishna</h2>
                <h3 class="text-gray-500 mb-3">Plant In-Charge</h3>
                <p class="mb-4">15 years of hands-on experience managing laser cutting and CNC bending operations with precision.</p>
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">V. S. Meghana</h2>
                <h3 class="text-gray-500 mb-3">Engineer – QA & Accounts</h3>
                <p class="mb-4">Bringing 2 years of experience in MR, quality systems, and financial processes to support operational excellence.</p>
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203" />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">Santhipriya</h2>
                <h3 class="text-gray-500 mb-3">Engineer – Systems</h3>
                <p class="mb-4">Experienced systems engineer with MNC background, contributing to technical and operational infrastructure.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
