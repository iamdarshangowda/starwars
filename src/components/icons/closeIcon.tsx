export const CloseIcon = (props: any) => {
  const { fill, size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={`${fill ? fill : "none"}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={`${fill ? fill : "currentColor"}`}
      className={`${size ? size : "w-6 h-6"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
