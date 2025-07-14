import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <div className="relative">
      Nav
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section className="padding">PopularProducts</section>
      <section className="padding">SuperQuality</section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">SpecialOffers</section>
      <section className="padding bg-blue-500">Customer Reviews</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className="padding bg-black padding-x padding-t pb-8">
        Footer
      </section>
    </div>
  );
};

export default App;
