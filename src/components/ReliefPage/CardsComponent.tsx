export default function FeatureCards() {
  return (
    <section className="w-full bg-[#1e1e1e] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="relative rounded-2xl p-8 text-white bg-gradient-to-br from-[#0a0a0a] via-[#14145a] to-[#3b3bdc] shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Real-time visualization
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Every key variable instantly available, from consumption to temperatures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl p-8 text-white bg-gradient-to-br from-[#2b2be0] via-[#3b3bdc] to-[#1a1a1a] shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Automated control
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Immediate corrective actions to keep operations within safe and efficient ranges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl p-8 text-white bg-gradient-to-br from-[#0a0a0a] via-[#14145a] to-[#3b3bdc] shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Remote cloud monitoring
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Access from any device, with reports and alerts always available.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
