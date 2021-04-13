export function textField() {
  const getFields = (fields, tag) => {
    return Array.from(fields)
      .map((field) => field.getElementsByTagName(tag))
      .filter((field) => {
        if (field.length) return field;
      });
  };

  const combineFields = (textFields) => {
    const inputs = getFields(textFields, "input");
    const textareas = getFields(textFields, "textarea");

    return [...inputs, ...textareas];
  };

  const fields = combineFields(document.getElementsByClassName("_input"));

  Array.from(fields).forEach((field) => {
    const [fieldItem] = field;

    if (fieldItem.value === "") {
      fieldItem.classList.add("empty");
    }

    fieldItem.addEventListener("change", (evt) => {
      if (evt.target.value === "") {
        evt.target.classList.add("empty");
      } else {
        evt.target.classList.remove("empty");
      }
    });
  });
}
