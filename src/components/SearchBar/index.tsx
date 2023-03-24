import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: Function;
};

export default function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState("");

  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input
        name="text"
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Nome do produto"
      />
      <button type="button" onClick={handleResetClick}>
        🗙
      </button>
    </form>
  );
}
