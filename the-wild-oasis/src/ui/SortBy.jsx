import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSelect(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  const selectedOption = searchParams.get("sortBy");

  return (
    <Select
      options={options}
      handleSelect={handleSelect}
      selectedValue={selectedOption}
      type="white"
    />
  );
}

export default SortBy;
