export let appname = 'myapp';
export function add(a: number, b: number): number {
    return a + b;
}

export class Formatter {
    static toUpperCase(value: string): string {
        return value.toUpperCase();
    }
}