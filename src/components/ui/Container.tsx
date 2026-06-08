import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

const sizeStyles = {
  narrow: "max-w-4xl",
  default: "max-w-[1280px]",
  wide: "max-w-[1400px]",
};

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  );
}
