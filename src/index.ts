import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log(user, company);

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
