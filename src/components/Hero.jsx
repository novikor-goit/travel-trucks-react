import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative w-full h-screen hero p-[80px]">
      <div className=" flex justify-center items-center mt-[50%] lg:mt-[0%] lg:absolute lg:left-0 lg:top-[50%] lg:translate-y-[-50%] ">
        <div className="flex flex-col justify-center items-center lg:pl-[64px]">
          <h1
            className="inline-flex text-textSecondary leading-[28px] text-[34px] 
          text-center whitespace-normal sm:text-[38px] md:text-[48px] md:leading-[24px]  lg:text-[48px] lg:text-left xl:text-[48px]">
            Campers of your dreams
          </h1>
          <strong className="text-textSecondary mt-[16px] text-[14px] text-center whitespace-normal sm:text-[18px] md:text-[24px] lg:text-left">
            You can find everything you want in our catalog
          </strong>
          <Link
            to="catalog"
            className="mt-[80px] min-w-[173px] max-w-[250px] font-medium py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:hover:bg-ButtonPushedColor lg:mt-[40px]">
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
