export enum ShopStatus {
    PENDING = "PENDING",
    TERMINATED = "TERMINATED",
    STOPPED = "STOPPED",
    RUNNING = "RUNNING"
}

export type Shop = { id: number; name: string; status: ShopStatus };
