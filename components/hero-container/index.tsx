import Image from 'next/image';

export function HeroContainer() {
  return (
    <section className="relative text-center">
      <Image
        src="https://www.screenly.io/assets/images/site/homepage/bg.png"
        alt="cover of the hero banner"
        fill
        className="z-[-1]"
      />
      <h1 className="mb-6 max-w-[1095px] text-[5rem] font-semibold leading-[130%]">
        Transform your screens into powerful digital signs
      </h1>
      <p className="mb-6 max-w-[697px] text-xl leading-6 text-[#b0b2bf]">
        Screenly provides the hardware and software you need to manage digital
        signs at scale. Update and schedule content, monitor screen health, and
        show content from your existing tech stack.
      </p>
      <div>
        <Image
          src="https://www.screenly.io/assets/images/site/homepage/header.png"
          alt="image that show screenly system accessed by multiple devices"
          width="1200"
          height="688"
          className="object-contain"
        />
      </div>
    </section>
  );
}