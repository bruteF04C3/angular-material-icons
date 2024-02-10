export class Util {
  static debounce(func: Function, delay: number) {
    let timeoutId: any;

    return function (...args: any[]) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
}
