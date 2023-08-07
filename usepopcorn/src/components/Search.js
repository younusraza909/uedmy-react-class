import { useEffect, useRef } from "react";

function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (e.code === "Enter") {
        // now we dont want this functionality if currently our input field is active
        // to check it
        if (document.activeElement === inputElement.current) return;

        inputElement.current.focus();
        setQuery("");
      }
    }

    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, [setQuery]);

  return (
    <input
      ref={inputElement}
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
export default Search;
