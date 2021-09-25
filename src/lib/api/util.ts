import { get } from "lodash";
//
import ApiResponse from "lib/api/type";

export const parseStandardResponse = <T>(response: ApiResponse<T>, defaultValue: any = []) =>
    get(response, "data.data", null);
