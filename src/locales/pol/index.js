import { POL_EMPLOYEE_DETAILS } from "./employeeDetails";
import { POL_EMPLOYEE_EDIT } from "./employeeEdit";
import { POL_EMPLOYEE } from "./employees";
import { POL_EVENTS } from "./events";
import { POL_HEADER } from "./header";
import { POL_INCIDENTS } from "./incidents";
import { POL_UNRECOGNISED } from "./unrecognised";

export const TR_POLISH = {
  ...POL_HEADER,
  ...POL_INCIDENTS,
  ...POL_UNRECOGNISED,
  ...POL_EVENTS,
  ...POL_EMPLOYEE,
  ...POL_EMPLOYEE_DETAILS,
  ...POL_EMPLOYEE_EDIT,
};
