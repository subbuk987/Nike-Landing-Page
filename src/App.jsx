import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer
} from './sections';
import Nav from './components/Nav';

const App = () => {
  return (
    <main className="relative">
      <nav>
        <Nav/>
      </nav>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffers/>
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  );
};

export default App
