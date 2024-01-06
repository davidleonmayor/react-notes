import PropTypes from "prop-types";

export default function SearchForm({
  onSearchInputChange,
  onSubmit,
  searchValue,
  inputRef,
}) {
  return (
    <form className="flex justify-between p-2" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        onChange={onSearchInputChange}
        value={searchValue}
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  );
}
SearchForm.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
};
