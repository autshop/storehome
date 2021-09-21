export enum LocalStorageKeys {
    JWT = "JWT"
}

class LocalStorageService {
    public static set(key: LocalStorageKeys, value: string) {
        localStorage.setItem(key, value);
    }
    public static get(key: LocalStorageKeys): string | null {
        return localStorage.getItem(key);
    }
}

export default LocalStorageService;
