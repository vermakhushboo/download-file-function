  /**
   * Throws an error if any of the keys are missing from the object
   * @param {*} obj
   * @param {string[]} keys
   * @throws {Error}
   */
  export function throwIfMissing(obj, keys) {
    const missing = [];
    for (let key of keys) {
      if (!(key in obj && obj[key] !== 0)) {
        missing.push(key);
      }
    }
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }
  }