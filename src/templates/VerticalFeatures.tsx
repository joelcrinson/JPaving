import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your Journey starts here"
    description="Your satisfaction is our priority, and we believe that every successful journey begins with understanding your vision. Our customer-centric approach means we listen attentively to your desires and collaborate closely with you throughout the process. Together, we'll turn your dreams into reality, creating an outdoor space that exceeds your expectations."
  >
    <VerticalFeatureRow
      title="Enhance Functionality"
      description="Paving is not just visually stunning; it also enhances practicality. Say goodbye to muddy footprints and puddles; a well-laid driveway provides a smooth and durable surface for your vehicles. Utilize paved walkways to navigate your garden with ease, and design outdoor areas that accommodate various activities, from playing with children to hosting gatherings."
      image="pic5.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title=" Security and Privacy"
      description="One of the primary benefits of fencing is the security it provides. A sturdy and well-built fence acts as a barrier, safeguarding your property from unauthorized access and intruders. Beyond security, fencing also offers a sense of privacy, shielding your family and outdoor activities from prying eyes."
      image="pic6.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Entertain Under the Stars"
      description="Outdoor lighting sets the stage for unforgettable gatherings and celebrations. From festive string lights that create a playful atmosphere to elegant pendants that grace your dining area, the right lighting ensures your outdoor events are nothing short of magical."
      image="pic7.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
