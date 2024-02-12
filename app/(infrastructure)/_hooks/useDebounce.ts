type Timer = ReturnType<typeof setTimeout>
type SomeFunction = (...args: any[]) => void

function useDebounce<Func extends SomeFunction>(func: Func, delay = 1000) {
  let timeout: Timer

  const execution = function executedFunction(...args: any): void {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, delay)
  }
  execution()
}

export default useDebounce
