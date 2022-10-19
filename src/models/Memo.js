import Repository from "@/composables/Repository.js";

class Memo extends Repository {
  constructor(attrs) {
    super(attrs.id);
    this.content = attrs.content;
  }

  get title() {
    return "TODO";
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
