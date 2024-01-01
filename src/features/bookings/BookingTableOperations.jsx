import Sort from "../../ui/Sort";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <Sort
        options={[
          {
            value: "startDate-descending",
            label: "Sort by date (recent first)",
          },
          {
            value: "startDate-ascending",
            label: "Sort by date (earlier first)",
          },
          {
            value: "totalPrice-descending",
            label: "Sort by amount (high to low)",
          },
          {
            value: "totalPrice-ascending",
            label: "Sort by amount (low to high)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
