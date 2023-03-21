import { EN_COMMON } from "./common";
import { EN_EMPLOYEE } from "./employees";
import { EN_EVENTS } from "./events";
import { EN_HEADER } from "./header";
import { EN_INCIDENTS } from "./incidents";
import { EN_LOGIN } from "./login";
import { EN_SETTINGS } from "./settings";
import { EN_SUPPORT } from "./support";
import { EN_UNRECOGNISED } from "./unrecognised";
import { EN_EMPLOYEE_DETAILS } from "./employeeDetails";
import { EN_EMPLOYEE_EDIT } from "./employeeEdit";

export const TR_ENGLISH = {
  ...EN_COMMON,
  ...EN_HEADER,
  ...EN_EMPLOYEE,
  ...EN_UNRECOGNISED,
  ...EN_LOGIN,
  ...EN_SUPPORT,
  ...EN_SETTINGS,
  ...EN_INCIDENTS,
  ...EN_EVENTS,
  ...EN_EMPLOYEE_DETAILS,
  ...EN_EMPLOYEE_EDIT,
};
