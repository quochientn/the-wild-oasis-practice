import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "No discount", value: "no-discount" },
          { label: "With discount", value: "with-discount" },
        ]}
      />

      <Sort
        options={[
          { label: "Sort by name (A - Z)", value: "name-ascending" },
          { label: "Sort by name (Z - A)", value: "name-descending" },
          {
            label: "Sort by price (low - high)",
            value: "regularPrice-ascending",
          },
          {
            label: "Sort by price (high - low)",
            value: "regularPrice-descending",
          },
          {
            label: "Sort by capacity (low - high)",
            value: "maxCapacity-ascending",
          },
          {
            label: "Sort by capacity (high - low)",
            value: "maxCapacity-desscending",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
