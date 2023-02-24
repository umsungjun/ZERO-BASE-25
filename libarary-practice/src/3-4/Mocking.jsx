import React, { useEffect, useState } from 'react';

const Item = ({ name, email }) => {
  return (
    <li>
      name: {name} email: {email}
    </li>
  );
};

const url = 'https://jsonplaceholder.typicode.com/users';

export default function Mocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClickButton = () => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => {
        setError(`오류 발생: ${err}`);
      });
  };

  if (error) return <p>{error}</p>;

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <button onClick={handleClickButton}>Get Data</button>
      {data && (
        <ul>
          {data.map(user => {
            <Item key={user.id} name={user.name} email={user.email} />;
          })}
        </ul>
      )}
    </div>
  );
}
