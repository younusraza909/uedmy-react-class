import Filter from "../../ui/Filter";
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
    </TableOperations>
  );
}

export default CabinsOperation;
