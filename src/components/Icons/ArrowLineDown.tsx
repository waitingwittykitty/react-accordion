import { SVGAttributes } from 'react';

export function ArrowLineDown(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00005 10.6087L14.3333 4.00011L15 4.69575L8.00005 12L1 4.69564L1.66666 4L8.00005 10.6087Z"
        fill="#999999"
      />
    </svg>
  );
}
