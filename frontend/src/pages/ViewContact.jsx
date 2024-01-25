import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewContact() {
  const params = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [contactError, setContactError] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/${params.contactId}`);
        const data = await res.json();
        if (data.success === false) {
          setContactError(true);
          setLoading(false);
          return;
        }
        setContact(data);
        setLoading(false);
        setContactError(false);
      } catch (error) {
        setContactError(true);
        setLoading(false);
      }
    };
    fetchContact();
  }, [params.contactId]);

  return <div>ViewContact</div>;
}

export default ViewContact;
