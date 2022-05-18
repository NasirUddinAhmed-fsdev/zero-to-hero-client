import React, { useEffect, useState } from "react";
import fetchUrl from "../../api/apiUrl";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/service")
    //   .then((res) => setServices(res));
    (async () => {
      const res = await fetchUrl.get("/service");
      setServices(res.data);
    })();
  }, []);

  return (
    <div>
      <h1>This is services</h1>
    </div>
  );
};

export default Services;
