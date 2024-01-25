import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function AddContact() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [viewCount, setViewCount] = useState(0);
  // const [imageUploadError, setImageUploadError] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   image: "",
  //   viewCount: 0,
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("viewCount", viewCount);
    // console.log(name);
    // console.log(phone);

    const result = await axios
      .post("http://localhost:5000/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/");
    console.log(result);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto mt-4 ">
          <div className="card shadow">
            <div className="card-header bg-primary">
              <h3 className="text-light">Add New Contact</h3>
            </div>
            <div className="card-body p-4">
              <form method="post" id="add-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label ">
                    Select Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="form-control form-control-lg"
                    required
                  />
                </div>
                <div className="mb-3 d-grid">
                  <input
                    type="submit"
                    name="submit"
                    value="Add Contact"
                    className="btn btn-primary btn-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
