/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce(callback: (...args: any[]) => void, wait: number) {
  let timerId: NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}
