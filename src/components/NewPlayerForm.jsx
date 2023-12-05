import { useState } from "react";
import { addPlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(`name: ${name}, value: ${value}`);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addPlayer({
        name: inputs.name,
        breed: inputs.breed,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="containerContainer">
      <div className="form-container">
        <form className="new-form" onSubmit={handleSubmit}>
          <h2>New Puppy Form</h2>
          <div className="new-form__div">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="new-form__div">
            <label htmlFor="breed">Breed</label>
            <input
              name="breed"
              type="text"
              value={inputs.breed || ""}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="add-btn" />
        </form>
      </div>
    </div>
  );
}
