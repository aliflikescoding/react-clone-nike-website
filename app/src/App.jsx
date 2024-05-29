import { Hero, PopularProducs, SuperQuality, Services, SpecialOffers, CustomersReviws, Subscribe, Footer } from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section>
      <section className="xl:padding-1 wide:padding-r paddiing-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducs />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomersReviws />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </section>
  </main>
);

export default App