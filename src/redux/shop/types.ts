export enum ShopStatus {
    PENDING = "PENDING",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    STOPPED = "STOPPED",
    RUNNING = "RUNNING"
}

export type Shop = { id: number; name: string; status: ShopStatus };
