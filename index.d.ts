declare function omitKeys<T extends {}, K extends [...(keyof T)[]]>
  (props: T, ...keys: K): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2]
  }

export default omitKeys;
