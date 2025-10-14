import React from "react";

type XIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

export default function XIcon({ size = 25, className, ...props }: XIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="currentColor" // <-- important
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M18.8946 2.75546H22.2681L14.8981 11.179L23.5684 22.6414H16.7796L11.4624 15.6895L5.37831 22.6414H2.00279L9.88579 13.6316L1.56836 2.75546H8.52947L13.3358 9.10979L18.8946 2.75546ZM17.7107 20.6222H19.5799L7.51375 4.66859H5.50782L17.7107 20.6222Z" />
    </svg>
  );
}
