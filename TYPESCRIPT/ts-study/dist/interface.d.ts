declare const getUsername: (user: User) => number | undefined;
interface User {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: (words: string) => string;
}
interface Config {
    width?: number;
}
declare function CalculateAreas(config: Config): {
    area: number;
};
interface SupperUser {
    getGrade: () => void;
}
interface VIPUser extends User, SupperUser {
    broadcast: () => void;
}
