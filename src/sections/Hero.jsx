import Button from "../components/Button"
import {arrowRight} from "../assets/icons"
import { statistics } from "../constants"
import {bigShoe1} from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  return (
    <section
      id="none"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="re;ative xl:2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"> 
          <p className="text-xl font-montserrat text-coral-red ">Our Summer Collection</p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> The New Arrival</span>
            <br/>
            <span className="text-coral-red inline-block mt-3"> Nike </span> Shoes
          </h1>
          <p className="font-montserrat text-slate-grey text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life
          </p>
          <Button label="Show now" iconURL={arrowRight}/>

          <div className="flex justify-start items-center flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div >
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-2 font-montserrat text-slate-grey">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center xl:min-h-scrreen max-xl:py-40 bg-[#F3F2FC] bg-cover bg-center w-full">
          <img
            src={bigShoe1}
            alt="shoe collection"
            width={610}
            height={502}
            className="object-contain absolute right-10 top-10 max-w-[600px] z-10"
          />
        </div>
        <div>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </section>
  )
}

export default Hero