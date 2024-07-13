import React from "react";

const Contact = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.yosh}</p>
      <h4>Hobby:</h4>
      <ul>
        {data.hobby.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
