import { CustomerReviews, Footer, Hero, PopularProducts, Services, Subscribe, SpecialOffer, SuperQuality } from "./sections";
import Nav from "./components/Nav";
import Button from "./components/Button";

const App = () => {
  return (
  <main className='relative'>
    <Nav />
    <section className='cl:padding-1 wide:padding-r padding-b'> 
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffer />
    </section>
    <section className='padding bg-pale-blue padding'>
      <CustomerReviews />
    </section>
    <section className='padding-x sm:py-32 w-full'>
      <Subscribe />
    </section>
    <section className='bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
  )
}

export default App;