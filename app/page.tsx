import { CustomersSection } from '@/components/customers-section';
import { HeroContainer } from '@/components/hero-container';
import { HowScreenlyWorks } from '@/components/how-screenly-works';

export default function Home() {
  return (
    <main>
      <HeroContainer />
      <CustomersSection />
      <HowScreenlyWorks />
    </main>
  );
}
