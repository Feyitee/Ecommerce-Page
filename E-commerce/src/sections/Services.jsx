import React from "react";
im;
const Services = () => {
  return (
    <section
      className="max-container flex flex-wrap justify-center
  items-center gap-9"
    >
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </section>
  );
};

export default Services;
