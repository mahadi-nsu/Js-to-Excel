import { RUS_EMPLOYEE_DETAILS } from "./employeeDetails";
import { RUS_EMPLOYEE_EDIT } from "./employeeEdit";
import { RUS_EMPLOYEE } from "./employees";
import { RUS_EVENTS } from "./events";
import { RUS_HEADER } from "./header";
import { RUS_INCIDENTS } from "./incidents";
import { RUS_UNRECOGNISED } from "./unrecognised";

export const TR_RUSSIAN = {
  ...RUS_HEADER,
  ...RUS_INCIDENTS,
  ...RUS_UNRECOGNISED,
  ...RUS_EVENTS,
  ...RUS_EMPLOYEE,
  ...RUS_EMPLOYEE_DETAILS,
  ...RUS_EMPLOYEE_EDIT,
};
