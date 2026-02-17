import React from 'react';

const stats = [
  { label: 'Rating', value: '4.6 ⭐' },
  { label: 'Happy Customers', value: '226+' },
  { label: 'Starts From', value: '₹59' },
  { label: 'Opens at', value: '10 AM' },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-warm-white border-b border-stone-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4 lg:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 min-w-[140px] text-center lg:text-left lg:first:text-left flex flex-col items-center lg:items-start relative lg:px-8 first:pl-0 border-stone-200 lg:border-r last:border-0">
              <span className="font-syne font-black text-2xl lg:text-3xl text-green-dark block">{stat.value}</span>
              <span className="font-dm text-sm text-text-mid uppercase tracking-wider font-semibold mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};