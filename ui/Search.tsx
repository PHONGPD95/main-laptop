interface Props {
  placeholder?: string;
  query?: string;
  setQuery: (query: string) => void;
  wrapperClass?: string;
}
const Search = ({ placeholder = 'Search...', query, setQuery, wrapperClass }: Props) => {
  return (
    <div className={`relative ${wrapperClass || ''}`}>
      <input
        className="field-input !pr-[60px]"
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className={`field-btn text-red !right-[40px] transition ${query ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setQuery('')}
        aria-label="Clear all"
      >
        <i className="icon-xmark-regular" />
      </button>
      <button className="field-btn icon" aria-label="Search">
        <i className="icon-magnifying-glass-solid" />
      </button>
    </div>
  );
};

export default Search;
