import Repository from "@/composables/Repository.js";

class Memo extends Repository {
  constructor(attrs) {
    super(attrs.id);
    this.content = attrs.content || "";
  }

  get title() {
    return this.content.split("\n")[0];
  }

  get attrs() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
    };
  }

  update(attrs) {
    this.content = attrs.content;
    this.save();
  }
}

export default Memo;
