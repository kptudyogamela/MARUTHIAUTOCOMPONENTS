export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Shooting Stars",
      subtitle: "Laser Cutting",
      description: "Precision laser cutting for custom components.",
      image: "Images/1.jpg",
    },
    {
      title: "The Catalyzer",
      subtitle: "CNC Bending",
      description: "Clean, automated bending for industrial use.",
      image: "Images/2.jpg",
    },
    {
      title: "The 400 Blows",
      subtitle: "Tie Rod Assembly",
      description: "High-strength rods for automotive applications.",
      image: "Images/3.jpg",
    },
    {
      title: "Neptune",
      subtitle: "Welding Section",
      description: "Welding setup for durable joint performance.",
      image: "Images/4.jpg",
    },
    {
      title: "Holden Caulfield",
      subtitle: "Finished Goods Storage",
      description: "Organized storage and inspection of parts.",
      image: "Images/5.jpg",
    },
    {
      title: "Alper Kamu",
      subtitle: "Packaging Area",
      description: "Secure and labeled packaging for safe delivery.",
      image: "Images/6.jpg",
    },
    {
      title: "Neptune",
      subtitle: "Welding Section",
      description: "Welding setup for durable joint performance.",
      image: "Images/7.jpg",
    },
    {
      title: "Holden Caulfield",
      subtitle: "Finished Goods Storage",
      description: "Organized storage and inspection of parts.",
      image: "Images/8.jpg",
    },
    {
      title: "Alper Kamu",
      subtitle: "Packaging Area",
      description: "Secure and labeled packaging for safe delivery.",
      image: "Images/9.jpg",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"> MAC Factory & Process Gallery</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A glimpse into the infrastructure, production, and people that power Maruthi Auto Components.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        {/* <div className="container px-5 py-24 mx-auto"> */}

        <div className="flex flex-wrap -m-4">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section >
  );
}
