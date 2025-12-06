
import AccordionSection from './AccordionSection';
import { DEVELOPER_FEATURES } from '../../data/developerEngineData';

export default function DeveloperEngineSection() {
  return (
    <AccordionSection
      id="developer-engine"
      title="Developer Email Engine"
      subtitle="A modern email engine designed for scale, speed, and observability. Inwren gives your product the deliverability power of an enterprise ESP with the clarity of an API-first platform."
      features={DEVELOPER_FEATURES}
    />
  );
}