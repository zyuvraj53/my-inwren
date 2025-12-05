// components/features/FeaturesTable.js

import CategoryHeader from './CategoryHeader';
import FeatureRow from './FeatureRow';

export default function FeaturesTable({ featuresData }) {
  return (
    <div className="border-t border-[#1E1E1E] mt-4">
      {Object.entries(featuresData).map(([category, features]) => (
        <div key={category}>
          <CategoryHeader title={category} />
          {features.map((feature, idx) => (
            <FeatureRow
              key={idx}
              name={feature.name}
              launch={feature.launch}
              growth={feature.growth}
              ultra={feature.ultra}
              enterprise={feature.enterprise}
            />
          ))}
        </div>
      ))}
    </div>
  );
}