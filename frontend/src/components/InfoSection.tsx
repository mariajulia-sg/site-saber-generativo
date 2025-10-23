import React, { useEffect, useState } from "react";

const InfoSection: React.FC = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const animateCount = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
      let start = 0;
      const duration = 1000;
      const increment = Math.ceil(target / (duration / 50));

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setter(start);
      }, 50);
    };

    animateCount(10, setProjects);
    animateCount(5, setClients);
    animateCount(3, setYears);
  }, []);

  return (
    <section className="w-full bg-[#05A694] text-[#f0f4f8] py-6 px-4 flex justify-center items-center">
      <div
        className="
          flex flex-col sm:flex-row
          justify-center items-center
          gap-4 sm:gap-10
          text-base sm:text-lg md:text-xl
          font-semibold font-serif
          text-center
        "
      >
        <span className="flex items-center gap-1 sm:gap-2">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f0f4f8]">
            +{projects}
          </span>
          <span>projetos concluídos</span>
        </span>

        <span className="hidden sm:block text-[#f0f4f8]/60 text-2xl">•</span>

        <span className="flex items-center gap-1 sm:gap-2">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f0f4f8]">
            +{clients}
          </span>
          <span>clientes parceiros</span>
        </span>

      </div>
    </section>
  );
};

export default InfoSection;
