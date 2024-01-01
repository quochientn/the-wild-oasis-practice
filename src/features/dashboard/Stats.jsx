import {
  MdOutlineCalendarMonth,
  MdOutlineInsertChart,
  MdOutlineLuggage,
  MdOutlinePaid,
} from "react-icons/md";

import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const numCheckins = confirmedStays.length;
  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        icon={<MdOutlineLuggage />}
        title="bookings"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<MdOutlinePaid />}
        title="sales"
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        icon={<MdOutlineCalendarMonth />}
        title="check ins"
        value={numCheckins}
        color="indigo"
      />
      <Stat
        icon={<MdOutlineInsertChart />}
        title="occupancy rate"
        value={Math.round(occupancy * 100) + "%"}
        color="yellow"
      />
    </>
  );
}

export default Stats;
