export default function SearchBar() {
  return (
    <div className="row m-3 col-md-4">
      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control "
          placeholder="Recipient's username"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>{" "}
    </div>
  );
}
