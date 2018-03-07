export default function({ target, listener }) {
  let observable;

  const set = (target, name, value) => {
    target[name] = value;
    listener(observable);
    return true;
  };

  const get = (target, name) => {
    const v = target[name];
    if (typeof v === 'object') {
      return new Proxy(v, handler);
    }

    return Object.freeze(target[name]);
  };

  const handler = {
    set,
    get,
  };

  observable = new Proxy(target, handler);

  return observable;
}
