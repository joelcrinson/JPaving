import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-4">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
        <Link href="mailto:jesmondpaving@gmail.com">
            <Button xl>Email</Button>
        </Link>
        </li>
        <li>
        <Link href="tel:07497 454882">
            <Button xl>Phone</Button>
        </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-3 pb-20"> 
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Jesmond Paving</span>
          </>
        }
        description="At Jesmond Paving, we understand that a well-designed landscape can enhance the aesthetics and value of any property. Our team of skilled landscapers and designers works tirelessly to bring your outdoor vision to life. Whether it's a charming garden, a cozy patio, or a complete landscape overhaul, we create spaces that invite you to immerse yourself in nature's splendor."
        button={
          <Link href="mailto:jesmondpaving@gmail.com">
            <Button xl>Contact us now for a free quote</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
