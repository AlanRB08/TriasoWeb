import InfoCard from "../../components/unitComponents/InfoCard";
import img1 from "../../assets/images/AsphaltPlant/Gallery/Fabricación de pugmill.jpg"
import img2 from "../../assets/images/AsphaltPlant/Gallery/Fabricación de tanque con caldera.jpg"
import img3 from "../../assets/images/AsphaltPlant/Gallery/Quemadores en fabricación.jpg"
import img4 from "../../assets/images/AsphaltPlant/Gallery/Soldadura interna de tambor mezclador.jpg"

export default function App() {
  return (
    <div className="p-8">
      <InfoCard
        sections={[
          {
            id: "A",
            label: "A",
            image: img3.src,
            title: "Competitive pricing without compromising quality",
            description:
              "High quality industrial solutions ensuring reliability and durability.",
          },
          {
            id: "B",
            label: "B",
            image: img2.src,
            title:
              "In-depth technical expertise for exceptional customer service",
            description:
              "Our equipment is designed with cutting-edge technology for maximum performance.",
          },
          {
            id: "C",
            label: "C",
            image: img1.src,
            title: "Customization to adapt to specific customer needs",
            description:
              "We have supplied and installed equipment worldwide with proven results.",
          },
          {
            id: "D",
            label: "D",
            image: img4.src,
            title: "Immediate spare parts availability",
            description:
              "Dedicated support team to ensure smooth operation and long-term satisfaction.",
          },
        ]}
      />
    </div>
  );
}
