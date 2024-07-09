import { useEffect } from 'react';
import { useArticles } from '../hooks/useArticles';
import { Placeholder } from './Placeholder';
import axios from 'axios';
import { Article } from '../../../../examples/module1/lesson1/react-hooks/types';

const ARTICLES_API = 'http://localhost:3000/api/data/articles';

export const Articles = () => {
  const { isLoading, data } = useArticles(ARTICLES_API);

  return (
    <>
      <div className='col-span-3'>
        <h2>Articles</h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6'>
          {isLoading && <Placeholder lines={8} height={20} />}
          {data?.map(({ author, content, id, title }) => (
            <li
              className='bg-white mt-2 p-2 rounded-lg shadow text-black'
              key={id}
            >
              <h2 className='font-bold'>{title}</h2>
              <p>{content}</p>
              <p>{author}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
