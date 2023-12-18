import { useEffect, useRef } from "react";

function useOutsideClick(handler, listeningCapture = true) {
  const ref = useRef();
  useEffect(() => {
    function handleOnClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleOnClick, listeningCapture);

    return () => document.removeEventListener("click", handleOnClick);
  }, [handler, ref]);

  return ref;
}

export default useOutsideClick;
