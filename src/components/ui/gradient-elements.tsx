
import { cn } from "@/lib/utils";

export const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={cn("bg-gradient-to-r from-infinite-purple to-infinite-orange bg-clip-text text-transparent", className)}>
    {children}
  </span>
);

export const GradientButton = ({
  children,
  className,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) => {
  const baseClassName = cn(
    "inline-flex items-center justify-center bg-gradient-to-r from-infinite-purple to-infinite-orange text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClassName}>
      {children}
    </button>
  );
};

export const GradientBorder = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("p-[1px] rounded-lg bg-gradient-to-r from-infinite-purple to-infinite-orange", className)}>
    <div className="bg-white dark:bg-gray-900 rounded-lg h-full w-full">{children}</div>
  </div>
);
