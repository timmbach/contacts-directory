function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light p-3 d-flex justify-content-between   w-100"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <a href="/" className="navbar-brand ">
        Home
      </a>

      <form className="form-inline d-flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0 ms-2 "
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
    // <nav className="navbar navbar-light bg-light">
    //   <a className="navbar-brand" href="#">
    //     <p className="fw-bold ">Navbar</p>
    //   </a>
    // </nav>
  );
}

export default Navbar;
