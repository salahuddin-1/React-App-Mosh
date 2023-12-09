import { FormEvent, useRef } from "react";

const Form = () => {
  // This {useRef} is a hook that allows us to reference an element in the DOM.
  // You can access any element and it's properties using this hook.
  // Initially, the value of the element is null, cuz it doesn't exist yet.
  // React will set the value of the element once it's rendered.
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const person = {
      name: "",
      age: 0,
    };

    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }

    if (ageRef.current !== null) {
      // person.age = ageRef.current.valueAsNumber;
      person.age = parseInt(ageRef.current.value);
    }

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
