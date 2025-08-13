'use client';
import { HTMLInputTypeAttribute } from 'react';

type Input = {
  label?: string;
  value: string;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute | 'textarea' | undefined;
};

export default function Input({
  value,
  label,
  onChange,
  className,
  placeholder,
  type = 'text',
}: Input) {
  return (
    <div
      className={`${className} text-[#010013] font-semibold flex flex-col gap-2`}
    >
      {!!label && <p>{label}</p>}

      {type === 'textarea' ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="border-[1.5px] border-[#CCCCD0] rounded-lg placeholder:text-[#B3B2B8] p-4 font-normal min-h-[155px]"
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="border-[1.5px] border-[#CCCCD0] rounded-lg placeholder:text-[#B3B2B8] p-4 font-normal"
        />
      )}
    </div>
  );
}
