import React from 'react';

const SloganSection: React.FC = () => {
  return (
    <section
      className="
        w-full 
        bg-[#174980] 
        text-[#f0f4f8] 
        py-6
        flex 
        justify-center 
        items-center 
        text-center
      "
    >
      <h2
        className="
          text-lg 
          sm:text-xl 
          md:text-2xl 
          lg:text-3xl 
          font-bold 
          font-serif 
          w-full 
          px-2 
          leading-snug
        "
      >
        A tecnologia é a nossa ferramenta, mas a humanização é a nossa estratégia.
      </h2>
    </section>
  );
};

export default SloganSection;
