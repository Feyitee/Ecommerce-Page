import React from "react";
import Nav from "./components/Nav.jsx";

import {
  CustomerReview,
  Hero,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections/index.js";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
};

export default App;
