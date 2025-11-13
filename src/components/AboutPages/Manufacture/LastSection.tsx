import InfoCard from "../../../components/unitComponents/InfoCard";

export default function App() {
  return (
    <div className="p-8">
      <InfoCard
        sections={[
          {
            id: "A",
            label: "A",
            image: "/images/machine1.jpg",
            title: "Competitive pricing without compromising quality",
            description:
              "High quality industrial solutions ensuring reliability and durability.",
          },
          {
            id: "B",
            label: "B",
            image: "/images/machine2.jpg",
            title:
              "In-depth technical expertise for exceptional customer service",
            description:
              "Our equipment is designed with cutting-edge technology for maximum performance.",
          },
          {
            id: "C",
            label: "C",
            image: "/images/machine3.jpg",
            title: "Customization to adapt to specific customer needs",
            description:
              "We have supplied and installed equipment worldwide with proven results.",
          },
          {
            id: "D",
            label: "D",
            image: "/images/machine4.jpg",
            title: "Immediate spare parts availability",
            description:
              "Dedicated support team to ensure smooth operation and long-term satisfaction.",
          },
        ]}
      />
    </div>
  );
}
