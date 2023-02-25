import React, { useEffect } from 'react';
import useSWR from 'swr';
export default function Profile() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher,
  );

  const Test = props => {
    return <li>{props.title}</li>;
  };

  useEffect(() => {}, [data]);

  console.log(error);
  console.log(data);
  return (
    <div>
      <ul>
        {data.map(item => {
          <Test title={item.title} />;
        })}
      </ul>
    </div>
  );
}
