import { format } from "date-fns";

const DateService = {
    formatTimestamp: (time: Date) => format(time, "yyyy/mm/dd")
}

export default DateService;
