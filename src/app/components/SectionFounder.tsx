import React from 'react';
import Heading from './Heading';
import NcImage from '../shared/NcImage/NcImage';

// Define StaticImageData type manually
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

// Import images from the icons folder
import icon1 from '../icons/How we work 1.png';
import icon2 from '../icons/How we work 2.png';
import icon3 from '../icons/How we work 6.png';
// import icon4 from '../icons/How we work 8.png';
// import icon5 from '../icons/How we work 9.png';
// import icon6 from '../icons/How we work 10.png'


export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string | StaticImageData; // Update type to allow StaticImageData
}

const FOUNDER_DEMO: People[] = [
  {
    id: '1',
    name: 'Founder Name 1',
    job: 'Founder Job 1',
    avatar: icon1 as StaticImageData // Cast imported image to StaticImageData
  },
  {
    id: '2',
    name: 'Founder Name 2',
    job: 'Founder Job 2',
    avatar: icon2 as StaticImageData // Cast imported image to StaticImageData
  },
  {
    id: '3',
    name: 'Founder Name 3',
    job: 'Founder Job 3',
    avatar: icon3 as StaticImageData
  },
  // Add more entries as needed
];

const SectionFounder: React.FC = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="We’re impartial and independent, and every day we create distinctive, world-class programmes and content"
      >
        ⛱ Get tons of unique feature for your Listing.
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm" style={{ backgroundColor: '#ebe7e7' }}>
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={typeof item.avatar === 'string' ? item.avatar : item.avatar.src}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
