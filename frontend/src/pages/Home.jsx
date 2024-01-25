function Home() {
  return (
    <div className="container mt-2">
      <a href="/add">
        <button type="button" className="btn btn-primary fw-bold">
          <i className="fas fa-user-plus me-2"></i>
          Add Contact
        </button>
      </a>
      <div className="row my-4">
        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table table-stripped text-center">
              <thead>
                <tr className="table-dark">
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>E-Mail</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img src="" alt="" />
                  </td>
                  <td>Timothy Mbachu</td>
                  <td>follow.timothy@gmail.com</td>
                  <td>0123456789</td>
                  <td>
                    <a href="" className="text-success">
                      <i className="fas fa-eye fa-lg mx-1"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
