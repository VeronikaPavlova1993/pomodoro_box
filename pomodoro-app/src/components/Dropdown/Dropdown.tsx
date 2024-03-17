import React, { useEffect, useRef } from 'react';

interface IDropdown {
 button: React.ReactNode;
 controls: React.ReactNode;
 isOpen: boolean;
 hanldeСlick: () => void;
 handleClose: () => void;
}

export function Dropdown({
 button,
 controls,
 isOpen,
 handleClose,
 hanldeСlick,
}: IDropdown) {
 const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
  function handleClick(event: MouseEvent) {
   if (event.target instanceof Node && !ref.current?.contains(event.target)) {
    handleClose();
   }
  }

  document.addEventListener('click', handleClick);

  return () => {
   document.removeEventListener('click', handleClick);
  };
 }, []);

 return (
  <div className="dropdown" ref={ref}>
   <div onClick={hanldeСlick}>{button}</div>
   {isOpen && <>{controls}</>}
  </div>
 );
}
