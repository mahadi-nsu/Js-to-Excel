import { LT_COMMON } from "./common";
import { LT_EMPLOYEE_DETAILS } from "./employeeDetails";
import { LT_EMPLOYEE_EDIT } from "./employeeEdit";
import { LT_EMPLOYEE } from "./employees";
import { LT_EVENTS } from "./events";
import { LT_HEADER } from "./header";
import { LT_INCIDENTS } from "./incidents";
import { LT_LOGIN } from "./login";
import { LT_SETTINGS } from "./settings";
import { LT_SUPPORT } from "./support";
import { LT_UNRECOGNISED } from "./unrecognised";

export const TR_LITHUNIAN = {
  ...LT_COMMON,
  ...LT_HEADER,
  ...LT_EMPLOYEE,
  ...LT_UNRECOGNISED,
  ...LT_LOGIN,
  ...LT_SUPPORT,
  ...LT_SETTINGS,
  ...LT_INCIDENTS,
  ...LT_EVENTS,
  ...LT_EMPLOYEE_DETAILS,
  ...LT_EMPLOYEE_EDIT,
};
