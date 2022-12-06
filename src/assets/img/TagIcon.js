import * as React from "react";

const TagIcon = (props) => (
  <svg
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    {...props}
  >
    <path d="M0 80v149.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
  </svg>
);

export default TagIcon;
