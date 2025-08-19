'use client';
import { useState } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import Error from './Error';

type Option = {
  label: string;
  value: string;
};

type Input = {
  label?: string;
  value: string;
  className?: string;
  options?: Option[];
  errorText?: string;
  showError?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute | 'textarea' | 'select';
};

export default function Input({
  value,
  label,
  onChange,
  className,
  errorText,
  showError,
  placeholder,
  type = 'text',
  options = [],
}: Input) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${className} text-[#010013] font-semibold flex flex-col gap-1.5`}
    >
      {!!label && (
        <p
          style={{
            fontSize: 'clamp(14px, 1.111vw, 16px)',
          }}
        >
          {label}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        {type === 'textarea' ? (
          <textarea
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="border-[1.5px] border-[#CCCCD0] rounded-lg placeholder:text-[#B3B2B8] font-normal min-h-[155px]"
            style={{
              padding: 'clamp(12px, 1.111vw, 16px)',
              fontSize: 'clamp(14px, 1.111vw, 16px)',
            }}
          />
        ) : type === 'select' ? (
          <div className="relative">
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="border-[1.5px] border-[#CCCCD0] rounded-lg flex justify-between items-center cursor-pointer"
              style={{
                padding: 'clamp(12px, 1.111vw, 16px)',
                fontSize: 'clamp(14px, 1.111vw, 16px)',
              }}
            >
              <span
                className={`font-normal ${
                  value ? 'text-[#010013]' : 'text-[#B3B2B8]'
                }`}
              >
                {value
                  ? options.find((o) => o.value === value)?.label
                  : placeholder}
              </span>
              <img
                width={18}
                height={18}
                alt="dropdown"
                src="/svgs/arrow-down.svg"
                className={`transition-transform duration-200 ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>

            {open && (
              <ul
                className="p-4 absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10 max-h-72 overflow-y-auto flex flex-col"
                style={{
                  boxShadow: '0px 2px 16px 0px #0000000D',
                }}
              >
                {options.map((opt) => (
                  <li
                    key={opt.value}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={`text-[#030027] rounded-lg cursor-pointer hover:bg-[#F2F2F5] ${
                      value === opt.value ? 'bg-[#E6E6EB]' : ''
                    }`}
                    style={{
                      padding: 'clamp(12px, 1.111vw, 16px)',
                      fontSize: 'clamp(14px, 1.111vw, 16px)',
                    }}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="border-[1.5px] border-[#CCCCD0] rounded-lg placeholder:text-[#B3B2B8] font-normal"
            style={{
              padding: 'clamp(12px, 1.111vw, 16px)',
              fontSize: 'clamp(14px, 1.111vw, 16px)',
            }}
          />
        )}

        {showError && <Error text={errorText} />}
      </div>
    </div>
  );
}
