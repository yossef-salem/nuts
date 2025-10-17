import heroBannerDesktop from "@/assets/hero-banner.webp";
import heroWavyDesktop from "@/assets/hero-wavy-desktop.jpg";
import heroBannerMobile from "@/assets/hero-banner-mobile.webp";
import heroWavyMobile from "@/assets/hero-wavy.webp";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16">
      {/* Banner Image */}
      <div className="w-full">
        <img
          src={heroBannerDesktop}
          alt="Premium nuts and dried fruits banner"
          className="hidden md:block w-full h-auto object-cover"
        />
        <img
          src={heroBannerMobile}
          alt="Premium nuts and dried fruits banner"
          className="block md:hidden w-full h-auto object-cover"
        />
      </div>

      {/* Wavy Image - Overlapping on top */}
      <div className="w-full -mt-[5%] md:-mt-[3%] relative z-10">
        <img
          src={heroWavyDesktop}
          alt="World of Nuts decorative banner"
          className="hidden md:block w-full h-auto object-cover"
        />
        <img
          src={heroWavyMobile}
          alt="World of Nuts decorative banner"
          className="block md:hidden w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
