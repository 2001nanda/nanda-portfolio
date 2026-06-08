import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: "default" | "narrow" | "wide";
  fullWidth?: boolean;
}

export default function Section({
  id,
  children,
  className,
  containerSize = "default",
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={id}
      className={cn("relative w-full py-24 md:py-32", className)}
    >
      {fullWidth ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
}
