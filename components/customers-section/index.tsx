import Image from 'next/image';
import Link from 'next/link';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { infiniteMovingImages } from '@/constants/infinite-moving-images';

const half = Math.ceil(infiniteMovingImages.length / 2);

const firstImagesHalf = infiniteMovingImages.slice(0, half);
const secondImagesHalf = infiniteMovingImages.slice(half);

export function CustomersSection() {
  return (
    <section className="text-center">
      <div className="mt-8">
        <p className="mb-2 text-[1.4375rem] font-medium leading-[1.875rem] text-[#b0b2bf]">
          As mentioned in
        </p>
        <Link
          href="https://techcrunch.com/2023/08/30/screenly-makes-it-easier-to-build-interactive-apps-for-its-digital-signage-platform/"
          rel="noopener"
        >
          <Image
            className="mx-auto"
            src="https://www.screenly.io/assets/images/site/homepage/techcrunch-logo.png"
            alt="TechCrunch"
            width="290"
            height="49"
          />
        </Link>
      </div>
      <div className="my-20">
        <p className="leading- mb-14 text-[1.6875rem] font-medium leading-normal">
          More than 10,000+ active screens for brands like...
        </p>
        <InfiniteMovingCards images={firstImagesHalf} direction="left" />
        <InfiniteMovingCards images={secondImagesHalf} direction="right" />
      </div>
    </section>
  );
}
