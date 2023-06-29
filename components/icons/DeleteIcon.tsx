import { SVGProps } from "react";

export function DeleteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 4v5v-5v16v-.238V20V4Zm0 18q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v4.35q-.475-.175-.975-.262T18 12V9h-5V4H6v16h6.35q.2.575.5 1.075t.7.925H6Zm9.9-.5l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.075 2.1l2.075 2.1l-1.4 1.4l-2.1-2.075l-2.1 2.075Z"
      ></path>
    </svg>
  );
}
