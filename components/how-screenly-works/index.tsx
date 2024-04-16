export function HowScreenlyWorks() {
  return (
    <section className="mx-auto max-w-[540px] px-3 md:max-w-[720px] min-[992px]:max-w-[960px] desktop:max-w-[1112px] ">
      <div className="mb-40 text-center">
        <h1 className="gradient-text mb-2 text-[2rem] leading-[1.25] lg:text-[3.8125rem] lg:font-medium lg:leading-[1.3]">
          How Screenly works
        </h1>
        <p className="mb-[4.375rem] text-lg text-[#b0b2bf]">
          Screenly is loaded with features to make digital signage management
          easy
        </p>
      </div>
      <div className="mb-4 flex flex-col gap-6 md:flex-row">
        <div className="grid h-min grow basis-[0%] gap-6">
          <h2 className="gradient-text max-w-[532px] text-[1.6875rem] font-medium leading-normal lg:text-[2.9375rem] lg:leading-[1.3]">
            Your content of choice, in 1080p Full HD or stunning 4K resolution
          </h2>
          <p className="leading-[1.625rem] text-[#b4b8d0] lg:text-lg">
            Show the content you love with Screenly. Broadcast images, videos,
            live web pages, and audio content, and plug into your existing
            business tools. Whether you want to get the word out on a new
            promotional offer, show off your products, or keep employees in the
            loop with relevant data dashboards, you can rely on Screenly.
          </p>
        </div>
        <div className="grow basis-[0%]">
          <video
            className="w-full max-w-[500px]"
            preload="none"
            playsInline
            autoPlay
            loop
            muted
          >
            <source
              src="https://www.screenly.io/assets/videos/full-hd.webm"
              type="video/webm"
            />
            <source
              src="https://www.screenly.io/assets/videos/full-hd.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-6 md:flex-row">
        <div className="grow basis-[0%]">
          <video
            className="w-full max-w-[500px]"
            preload="none"
            playsInline
            autoPlay
            loop
            muted
          >
            <source
              src="https://www.screenly.io/assets/videos/uptime.webm"
              type="video/webm"
            />
            <source
              src="https://www.screenly.io/assets/videos/uptime.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid h-min grow basis-[0%] gap-6">
          <h2 className="gradient-text max-w-[532px] text-[1.6875rem] font-medium leading-normal lg:text-[2.9375rem] lg:leading-[1.3]">
            Maximize screen uptime with real-time monitoring
          </h2>
          <p className="leading-[1.625rem] text-[#b4b8d0] lg:text-lg">
            With our robust digital signage players and automatic software
            updates, you can rest assured that your digital signs are stable and
            secure. Also, Screenly locally saves your content so it will show
            even during an internet outage. If there is ever a screen that
            requires troubleshooting, make sure that you see the issue before
            your customers do with Screenly&apos;s customizable alerts.
          </p>
        </div>
      </div>
    </section>
  );
}
