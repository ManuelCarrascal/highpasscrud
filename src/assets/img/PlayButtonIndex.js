import * as React from "react"

const PlayButtonIndex = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={130}
    viewBox="0 0 200 200"
    width={130}
    {...props}
  >
    <g
      style={{
        fill: "#fff",
      }}
    >
      <path
        d="M256 0C114.833 0 0 114.844 0 256s114.833 256 256 256 256-114.844 256-256S397.167 0 256 0Zm101.771 264.969-149.333 96a10.62 10.62 0 0 1-5.771 1.698c-1.75 0-3.521-.438-5.104-1.302A10.653 10.653 0 0 1 192 352V160c0-3.906 2.125-7.49 5.563-9.365 3.375-1.854 7.604-1.74 10.875.396l149.333 96a10.684 10.684 0 0 1 4.896 8.969c0 3.625-1.854 7.01-4.896 8.969z"
        style={{
          fill: "#fff",
        }}
        transform="matrix(.34824 0 0 .34824 10.85 10.85)"
      />
    </g>
  </svg>
)

export default PlayButtonIndex
