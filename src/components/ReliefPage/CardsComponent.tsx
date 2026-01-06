export default function FeatureCards() {
  return (
    <section className="w-full bg-[#1e1e1e] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative rounded-2xl p-8 text-white shadow-xl overflow-hidden
                bg-gradient-to-br from-[#0a0a0a] via-[#14145a] to-[#3b3bdc]">

            {/* SVG de fondo */}

            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="absolute right-28 bottom-0 w-40 h-40 pointer-events-none opacity-20" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="32" cy="32" r="24"></circle><polyline points="40 44 32 32 32 16"></polyline></g></svg>

            {/* Contenido */}
            <h3 className="relative text-2xl font-medium mb-4">
              Real-time visualization
            </h3>

            <p className="relative text-[#fffaea] font-medium leading-relaxed">
              Every key variable instantly available, from consumption to temperatures.
            </p>
          </div>

          <div className="relative rounded-2xl p-8 text-white overflow-hidden shadow-xl bg-gradient-to-br from-[#2b2be0] via-[#3b3bdc] to-[#1a1a1a]">
            <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" className="absolute right-32 bottom-5 w-32 h-32 opacity-20 pointer-events-none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m1739.34 1293.414-105.827 180.818-240.225-80.188-24.509 22.25c-69.91 63.586-150.211 109.666-238.644 136.771l-32.076 9.94-49.468 244.065H835.584l-49.468-244.179-32.076-9.939c-88.432-27.105-168.734-73.185-238.644-136.771l-24.508-22.25-240.226 80.189-105.826-180.82 189.74-164.442-7.453-32.978c-10.39-45.742-15.586-91.483-15.586-135.869 0-44.386 5.195-90.127 15.586-135.868l7.454-32.979-189.741-164.442 105.826-180.819 240.226 80.075 24.508-22.25c69.91-63.585 150.212-109.665 238.644-136.884l32.076-9.826 49.468-244.066h213.007l49.468 244.18 32.076 9.825c88.433 27.219 168.734 73.186 238.644 136.885l24.509 22.25 240.225-80.189 105.826 180.819-189.74 164.442 7.453 32.98c10.39 45.74 15.586 91.481 15.586 135.867 0 44.386-5.195 90.127-15.586 135.869l-7.454 32.978 189.741 164.556Zm-53.76-333.403c0-41.788-3.84-84.48-11.634-127.284l210.184-182.062-199.454-340.856-265.186 88.433c-66.974-55.567-143.322-99.388-223.85-128.414L1140.977.01H743.198l-54.663 269.704c-81.431 29.139-156.424 72.282-223.963 128.414L199.5 309.809.045 650.665l210.07 182.062c-7.68 42.804-11.52 85.496-11.52 127.284 0 41.789 3.84 84.48 11.52 127.172L.046 1269.357 199.5 1610.214l265.186-88.546c66.974 55.68 143.323 99.388 223.85 128.527l54.663 269.816h397.779l54.663-269.703c81.318-29.252 156.424-72.283 223.85-128.527l265.186 88.546 199.454-340.857-210.184-182.174c7.793-42.805 11.633-85.496 11.633-127.285ZM942.075 564.706C724.1 564.706 546.782 742.024 546.782 960c0 217.976 177.318 395.294 395.294 395.294 217.977 0 395.294-177.318 395.294-395.294 0-217.976-177.317-395.294-395.294-395.294m0 677.647c-155.633 0-282.353-126.72-282.353-282.353s126.72-282.353 282.353-282.353S1224.43 804.367 1224.43 960s-126.72 282.353-282.353 282.353" fill-rule="evenodd"></path> </g></svg>
            <h3 className="text-2xl font-medium mb-4">
              Automated control
            </h3>
            <p className="text-[#fffaea] font-medium leading-relaxed">
              Immediate corrective actions to keep operations within safe and efficient ranges.
            </p>
          </div>
          <div className="relative rounded-2xl p-8 text-white overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#14145a] to-[#3b3bdc] shadow-xl">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-28 bottom-0 w-40 h-40 opacity-20 pointer-events-none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5V15.5M12 15.5L10 13.5M12 15.5L14 13.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
