"use client";
import { useRouter } from "next/navigation";
import CMSHeader from "../Components/CMSHeader";
import Footer from "../Components/Footer";
import {
  FaInfoCircle,
  FaClock,
  FaImages,
  FaEnvelope,
  FaUserCheck,
  FaStar,
  FaFileAlt,
  FaBookOpen,
} from "react-icons/fa";

const cards = [
  { title: "About", icon: <FaInfoCircle />, route: "/aboutcms" },
  { title: "Timing", icon: <FaClock />, route: "/timingcms" },
  { title: "Gallery", icon: <FaImages />, route: "/gallerycms" },
  { title: "Message", icon: <FaEnvelope />, route: "/messagecms" },
  { title: "Admission", icon: <FaUserCheck />, route: "/admissioncms" },
  { title: "Testimonial", icon: <FaStar />, route: "/testimonialcms" },
  { title: "Extra Content", icon: <FaFileAlt />, route: "/extracontentcms" },
  { title: "Program", icon: <FaBookOpen />, route: "/programcms" },
];

export default function CMSDashboard() {
  const router = useRouter();

  return (
    <>
      <CMSHeader />
      <main className="p-6 min-h-[80vh] bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
          CMS Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => router.push(card.route)}
              className="cursor-pointer bg-white rounded shadow p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition"
            >
              <div className="text-4xl text-blue-700 mb-2">{card.icon}</div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
