import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinsOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "With Discount", value: "with-discount" },
          { label: "No Discount", value: "no-discount" },
        ]}
      />
      <SortBy
        options={[
          { label: "Sort By Name (A-Z)", value: "name-asc" },
          { label: "Sort By Name (Z-A)", value: "name-desc" },
          { label: "Sort By Price (Low First)", value: "regularPrice-asc" },
          { label: "Sort By Price (High First)", value: "regularPrice-desc" },
          { label: "Sort By Capacity (Low First)", value: "maxCapacity-asc" },
          { label: "Sort By Capacity (High First)", value: "maxCapacity-desc" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinsOperation;
