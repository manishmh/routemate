const Location = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="32"
      viewBox="0 0 44 32"
      fill="none"
    >
      <path
        d="M28 13.3754C28 17.7508 22 25 22 25C22 25 16 18 16 13.3754C16 11.6845 16.6321 10.0629 17.7574 8.86731C18.8826 7.67169 20.4087 7 22 7C23.5913 7 25.1174 7.67169 26.2426 8.86731C27.3679 10.0629 28 11.6845 28 13.3754ZM22.1633 10.9811C21.7123 10.9811 21.2715 11.1232 20.8966 11.3894C20.5216 11.6556 20.2294 12.034 20.0568 12.4767C19.8842 12.9193 19.8391 13.4065 19.927 13.8764C20.015 14.3464 20.2322 14.7781 20.551 15.1169C20.8699 15.4557 21.2762 15.6865 21.7185 15.7799C22.1608 15.8734 22.6192 15.8255 23.0358 15.6421C23.4525 15.4587 23.8085 15.1482 24.0591 14.7498C24.3096 14.3514 24.4433 13.883 24.4433 13.4038C24.4433 12.7612 24.2031 12.145 23.7755 11.6907C23.3479 11.2363 22.768 10.9811 22.1633 10.9811Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Location;