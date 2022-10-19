class Repository {
  static all() {
    return [];
  }

  static create(attrs = {}) {
    return new this(attrs);
  }

  constructor(id = null) {
    this.id = id;
  }

  get generateId() {
    return Date.now().toString();
  }

  save() {
    // TODO
  }

  update() {
    throw Error("Not Implemented");
  }

  destroy() {
    // TODO
    delete this;
  }
}

export default Repository;
