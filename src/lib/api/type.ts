import { AxiosResponse } from "axios";

type ApiResponse<T> = AxiosResponse<{ data: T; error: string; code: string }>;

export default ApiResponse;
