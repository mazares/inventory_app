import "./SearchBar.css";

export default function SearchBar(params) {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="search" />

        <button type="submit" className="btn-search">
          ok
        </button>
      </form>
    </div>
  );
}
