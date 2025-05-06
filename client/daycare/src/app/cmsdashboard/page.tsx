import Footer from "../Components/Footer";
import Header from "../Components/Navbar";
import {
  FaUsers,
  FaImages,
  FaChalkboardTeacher,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa";

const sections = [
  { name: "Team", icon: <FaUsers size={30} className="text-yellow-500" /> },
  { name: "Gallery", icon: <FaImages size={30} className="text-yellow-500" /> },
  {
    name: "Program",
    icon: <FaChalkboardTeacher size={30} className="text-yellow-500" />,
  },
  {
    name: "Contact",
    icon: <FaEnvelope size={30} className="text-yellow-500" />,
  },
  {
    name: "Principal Message",
    icon: <FaUserTie size={30} className="text-yellow-500" />,
  },
];

export default function CMSCards() {
  return (
    <>
      <Header />
      <div className="min-h-[100vh] lg:mt-20 flex flex-wrap justify-center items-center pt-8 gap-x-6 gap-y-7 bg-gray-50 p-6">
        {sections.map(({ name, icon }) => (
          <div
            key={name}
            className="bg-white w-[90vw] lg:w-[30vw] max-w-sm p-6 rounded shadow hover:shadow-md transition text-center"
          >
            <div className="mb-4 flex justify-center">{icon}</div>

            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-gray-500 mt-2 mb-4">
              Manage content for {name.toLowerCase()} section
            </p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Click Me
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
