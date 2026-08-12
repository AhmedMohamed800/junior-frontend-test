interface Icon {
  width?: string;
  height?: string;
  className?: string;
}

function CloseIcon({ width = "24", height = "24", className = "" }: Icon) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
          fill="#ffffff"
        ></path>
      </g>
    </svg>
  );
}

function PlusIcon({ width = "22", height = "22", className = "" }: Icon) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M6 12H18M12 6V18"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

function SaveIcon({ width = "22", height = "22", className = "" }: Icon) {
  return (
    <svg
      viewBox="0 -0.5 21 21"
      version="1.1"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>save_item [#ffffff]</title> <desc>Created with Sketch.</desc>
        <defs> </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-99.000000, -680.000000)"
            fill="#ffffff"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M50.21875,525 L52.31875,525 L52.31875,523 L50.21875,523 L50.21875,525 Z M61.9,538 L59.8,538 L59.8,532 L58.88125,532 L57.7,532 L49.3,532 L47.5276,532 L47.2,532 L47.2,538 L45.1,538 L45.1,526.837 L47.2,524.837 L47.2,528 L48.11875,528 L49.3,528 L57.7,528 L59.47135,528 L59.8,528 L59.8,522 L61.9,522 L61.9,538 Z M49.3,538 L57.7,538 L57.7,534 L49.3,534 L49.3,538 Z M49.3,522.837 L50.17885,522 L57.7,522 L57.7,526 L49.3,526 L49.3,522.837 Z M63.9664,520 L61.8664,520 L49.3,520 L49.3,520.008 L47.2084,522 L47.2,522 L47.2,522.008 L43.0084,526 L43,526 L43,538 L43,540 L45.1,540 L61.8664,540 L63.9664,540 L64,540 L64,538 L64,522 L64,520 L63.9664,520 Z"
                id="save_item-[#ffffff]"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function DeleteIcon({ width = "22", height = "22", className = "" }: Icon) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#ffffff"
          d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
        ></path>
      </g>
    </svg>
  );
}

function EditIcon({ width = "22", height = "22", className = "" }: Icon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title></title>
        <g id="Complete">
          <g id="edit">
            <g>
              <path
                d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <polygon
                fill="none"
                points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function SearchIcon({ width = "22", height = "22", className = "" }: Icon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

export { CloseIcon, PlusIcon, SaveIcon, DeleteIcon, EditIcon, SearchIcon };
