const add = (...outArg) => {
  fn.prototype.toString = outArg.reduce((sum, item) => sum + item)
  const fn = (...innerArg) => {
    return add(...outArg, ...innerArg)
  }
  return fn;
}