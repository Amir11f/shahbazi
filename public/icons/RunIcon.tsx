import React, { SVGProps } from "react";

const RunIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.4803 6.9067C17.2376 7.90097 17.2376 10.4324 15.4803 11.4267L3.87512 17.9929C2.14412 18.9723 -0.000225997 17.7218 -0.00022591 15.7329L-0.000225336 2.60041C-0.000225249 0.611541 2.14412 -0.638973 3.87512 0.340432L15.4803 6.9067Z"
        fill="currentColor" // now you can control color via className
      />
    </svg>
  );
};

export default RunIcon;
