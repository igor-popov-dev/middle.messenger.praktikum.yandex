function isEmpty(value: unknown) {
  if (Array.isArray(value) && value.length) {
    return false;
  }
  if (value === null ){
    return true;
  }
  if (typeof value === 'object') {
    for (const prop in value) {
      //@ts-expect-error: Unreachable code error
      if (Object.hasOwn(value, prop)) {
        return false;
      }
    }
  }
  if (typeof value === 'string' && value.length) {
    return false;
  }
  //@ts-expect-error: Unreachable code error
  if (value && value.size) {
    return false;
  }
  return true;
}
isEmpty(0);
//решение автора https://playcode.io/880114
