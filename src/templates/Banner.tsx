import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title=" Our exceptional landscaping and paving services are designed to bring your vision to life, evating your outdoor areas to a whole new level."
      button={
        <Link href="tel:07497 454882">
          <Button>Call Now</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
