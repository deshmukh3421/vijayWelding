import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const sizeMap = {
    sm: { icon: 36, nameClass: "text-sm tracking-[3px]", taglineClass: "text-[0.5rem] tracking-[1px]" },
    md: { icon: 42, nameClass: "text-base tracking-[4px]", taglineClass: "text-[0.6rem] tracking-[2px]" },
    lg: { icon: 80, nameClass: "text-xl tracking-[5px]", taglineClass: "text-xs tracking-[3px]" },
  };

  const s = sizeMap[size];

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.svg"
        alt="Vijay Welding Logo"
        width={s.icon}
        height={s.icon}
        className="flex-shrink-0"
        priority
      />
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-heading font-bold text-welding-text whitespace-nowrap ${s.nameClass}`}
          >
            VIJAY WELDING
          </span>
          <span
            className={`text-welding-accent uppercase ${s.taglineClass}`}
          >
            Quality That You Feel
          </span>
        </div>
      )}
    </div>
  );
}
