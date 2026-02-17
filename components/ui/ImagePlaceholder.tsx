import React from 'react';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ label, className = '' }) => {
  return (
    <div className={`bg-stone-200 border-2 border-dashed border-stone-400 flex items-center justify-center text-stone-500 text-xs font-medium font-dm p-4 text-center ${className}`}>
      [ Image: {label} ]
    </div>
  );
};