import Image from 'next/image';

type Error = {
  text?: string;
};
export default function Error({ text }: Error) {
  return (
    <div className="flex items-center gap-1">
      <Image src={'/svgs/error.svg'} alt="error icon" width={16} height={16} />
      <p className="text-xs text-[#D32F2F] font-medium">{text || 'Required'}</p>
    </div>
  );
}
