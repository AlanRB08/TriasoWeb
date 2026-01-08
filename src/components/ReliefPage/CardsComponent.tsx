import img1 from "../../assets/images/Relief/Iconos/1.png";
import img2 from "../../assets/images/Relief/Iconos/2.png";
import img3 from "../../assets/images/Relief/Iconos/3.png";
export default function FeatureCards() {
  return (
    <section className="w-full bg-[#1e1e1e] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative rounded-2xl p-8 text-white shadow-xl overflow-hidden
                bg-gradient-to-br from-[#0a0a0a] via-[#14145a] to-[#3b3bdc]">

            {/* SVG de fondo */}
            <img src={img1.src} className="absolute right-28 bottom-0 w-40 h-40 pointer-events-none opacity-70" alt="Icono1" />


            {/* Contenido */}
            <h3 className="relative text-2xl font-medium mb-4">
              Real-time visualization
            </h3>

            <p className="relative text-[#fffaea] font-medium leading-relaxed">
              Every key variable instantly available, from consumption to temperatures.
            </p>
          </div>

          <div className="relative rounded-2xl p-8 text-white overflow-hidden shadow-xl bg-gradient-to-br from-[#2b2be0] via-[#3b3bdc] to-[#1a1a1a]">
            <img src={img2.src} className="absolute right-28 bottom-0 w-40 h-40 pointer-events-none opacity-70" alt="Icono1" />
            <h3 className="text-2xl font-medium mb-4">
              Automated control
            </h3>
            <p className="text-[#fffaea] font-medium leading-relaxed">
              Immediate corrective actions to keep operations within safe and efficient ranges.
            </p>
          </div>
          <div className="relative rounded-2xl p-8 text-white overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#14145a] to-[#3b3bdc] shadow-xl">
            <img src={img3.src} className="absolute right-28 bottom-0 w-40 h-40 pointer-events-none opacity-80" alt="Icono1"/>
            <h3 className="text-2xl font-medium mb-4">
              Remote cloud monitoring
            </h3>
            <p className="text-[#fffaea] font-medium leading-relaxed">
              Access from any device, with reports and alerts always available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
