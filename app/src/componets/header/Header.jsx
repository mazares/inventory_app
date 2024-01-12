import "./Header.css";
import Nav from "../nav/Nav";

import SearchBar from "../search_bar/SearchBar";

export default function Header(params) {
  return (
    <header className="header">
      <SearchBar />

      <Nav />
    </header>
  );
}
