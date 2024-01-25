import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    // Fetch contacts when the component mounts
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/"); // Adjust the URL based on your server configuration
      const data = await response.json();
      setContacts(data);
      console.log(data);
      console.log(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  return (
    <div className="container mt-2">
      <Link to={"/add"}>
        <button type="button" className="btn btn-primary fw-bold">
          <i className="fas fa-user-plus me-2"></i>
          Add Contact
        </button>
      </Link>
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
                {contacts.map((contact, index) => {
                  <tr key={contact._id}>
                    <td>{index}</td>
                    <td>
                      <img src={contact.image} alt="contact photo" />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link to={`/${contact._id}`} className="text-success">
                        <i className="fas fa-eye fa-lg mx-1"></i>
                      </Link>
                    </td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
