class Repository {
  static #ID_PREFIX = "vue3-memo";

  static all() {
    const records = [];
    for (var i = 0; i < localStorage.length; i++) {
      const reg = new RegExp(`^${Repository.#ID_PREFIX}-\\d+$`);
      const id = localStorage.key(i);
      if (reg.test(id)) {
        const attrs = { id };
        Object.assign(attrs, JSON.parse(localStorage.getItem(id)));

        records.push(new this(attrs));
      }
    }

    return records.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  }

  static create(attrs = {}) {
    const record = new this(attrs);

    record.save();

    return record;
  }

  constructor(id = null) {
    this.id = id;
  }

  save() {
    if (!this.id) {
      this.id = this.generateId;
    }
    localStorage.setItem(this.id, JSON.stringify(this.attrs));
  }

  get generateId() {
    return `${Repository.#ID_PREFIX}-${Date.now().toString()}`;
  }

  get attrs() {
    throw Error("Not Implemented");
  }

  update() {
    throw Error("Not Implemented");
  }

  destroy() {
    localStorage.removeItem(this.id);
  }
}

export default Repository;
