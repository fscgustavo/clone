import Image from 'next/image';

export function HeroContainer() {
  return (
    <section className="relative text-center">
      <Image
        src="https://www.screenly.io/assets/images/site/homepage/bg-sm.png"
        alt="cover of the hero banner"
        width="800"
        height="500"
        className="absolute inset-0 z-[-1] h-[81%] w-full md:hidden"
      />
      <Image
        src="https://www.screenly.io/assets/images/site/homepage/bg.png"
        alt="cover of the hero banner"
        width="1400"
        height="900"
        // fill
        className="absolute inset-0 z-[-1] hidden w-full md:block md:h-[81%] min-[992px]:h-[71%] desktop:h-[61%]"
      />
      <div className="grid place-content-center place-items-center px-4 py-24">
        <h1 className="gradient-text mb-6 max-w-[790px] px-6 text-[2.625rem] font-semibold leading-[130%] min-[992px]:text-[5rem] desktop:max-w-[1068px]">
          Transform your screens into powerful digital signs
        </h1>
        <p className="mb-6 max-w-[697px] text-xl leading-6 text-[#b0b2bf]">
          Screenly provides the hardware and software you need to manage digital
          signs at scale. Update and schedule content, monitor screen health,
          and show content from your existing tech stack.
        </p>
      </div>
      <div className="after:round-top after:bottom-[-59%] after:min-[992px]:bottom-[-49%] after:desktop:bottom-[-39%]">
        <Image
          src="https://www.screenly.io/assets/images/site/homepage/header.png"
          alt="image that show screenly system accessed by multiple devices"
          width="936"
          height="600"
          className="z-1 mx-auto w-[88vw] object-contain"
        />
      </div>
    </section>
  );
}
