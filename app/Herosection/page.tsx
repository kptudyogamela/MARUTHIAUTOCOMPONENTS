'use client';

import Image from 'next/image';
import { PlayCircle, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const fullText = "Trusted by Industry Leaders";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const current = fullText;
      const updatedText = isDeleting
        ? current.substring(0, displayedText.length - 1)
        : current.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loopNum]);

  return (
    <section className="relative bg-white text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto px-6 mt-15 py-4 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center items-start text-center md:text-left">
          {/* Headline */}
          <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-snug mb-6">
            <span className="block text-4xl sm:text-4xl">Precision Engineering</span>
            <span className="block text-red-400 min-h-[2.5rem]">{displayedText}<span className="animate-pulse">|</span></span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg text-gray-700 max-w-xl">
            Maruthi Auto Components delivers high-quality tie rods, laser-cut parts, CNC bent components, and assemblies trusted by India’s top OEMs. Backed by ISO certification and over 35 years of expertise.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
            <button
              onClick={() => setShowVideo(true)}
              className="bg-red-600 inline-flex py-3 px-5 rounded-lg items-center text-white hover:bg-red-700 focus:outline-none transition"
            >
              <PlayCircle className="w-6 h-6" />
              <span className="ml-3 flex flex-col items-start leading-none">
                <span className="text-xs text-white mb-1">Watch</span>
                <span className="title-font font-medium text-white">Company Video</span>
              </span>
            </button>

            <button
              onClick={() => setShowCertificate(true)}
              className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none transition"
            >
              <Award className="w-6 h-6 text-red-600" />
              <span className="ml-3 flex flex-col items-start leading-none">
                <span className="text-xs text-gray-600 mb-1">To View</span>
                <span className="title-font font-medium text-gray-800">ISO Certificate</span>
              </span>
            </button>
          </div>

          <p className="text-sm text-gray-500">
            ISO Certified | Clients: Indo Autotech, Havells, Surin Automotive & more.
          </p>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/Images/herosec2.png"
              alt="MAC Factory"
              width={1200}
              height={1000}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-4xl bg-white/10 rounded-xl overflow-hidden shadow-lg">
            <video controls autoPlay className="w-full h-full rounded-lg">
              <source src="/Images/videos/5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-xl bg-black/60 hover:bg-red-600 transition rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close Video"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-98 max-w-xl bg-white rounded-xl p-6 shadow-lg">
            <Image
              src="/Images/certificate1.png"
              alt="ISO Certificate"
              width={600}
              height={800}
              className="object-contain w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-2 right-2 text-black text-xl bg-white hover:bg-red-600 hover:text-white transition rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close Certificate"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
