function isEmpty(value: unknown) {
    if (Array.isArray(value) && value.length) {
      return false;
    }
    if (value === null ){
      return true;
    }
    if (typeof value === 'object') {
      for (const prop in value) {
        //@ts-ignore
        if (Object.hasOwn(value, prop)) {
          return false;
        }
      }
    }
    if (typeof value === 'string' && value.length) {
      return false;
    }
    //@ts-ignore
    if (value && value.size) {
      return false;
    }
    return true;
  }

//решение автора https://playcode.io/880114