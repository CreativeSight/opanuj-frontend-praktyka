import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useComments } from '../hooks/useComments';
import { useEffect, useState } from 'react';
import { Placeholder } from './Placeholder';

const COMMENTS_API = 'http://localhost:3000/api/data/comments';

export const Comments = () => {
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState('');
  const mutation = useMutation({
    mutationFn: (comment) => {
      return axios.post(COMMENTS_API, comment);
    },
    onMutate: (variables) => {
      console.log('onMutate', variables);
      return { variables };
    },
    onError: (error, variables) => {
      console.error(error);
      setComments(comments.filter((comment) => comment.id !== variables.id));
    },
    onSuccess: (data) => {
      setComments([...comments, JSON.parse(data.config.data)]);
    },
  });
  const { isLoading, data } = useComments(COMMENTS_API);
  const [comments, setComments] = useState(data ?? []);

  const handleSubmitNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({
      id: comments.length + 1,
      author: 'Konrad Leśniak',
      text: newComment,
      rating: parseInt(newRating, 10),
    });

    setNewComment('');
    setNewRating('');
  };

  useEffect(() => {
    if (data) {
      setComments(data);
    }
  }, [data]);

  return (
    <>
      <div className='col-span-1'>
        <h2>Comments</h2>
        <ul className='grid grid-cols-1 gap-4 gap-y-6'>
          {isLoading && <Placeholder lines={5} height={16} />}
          {comments?.map(({ author, id, rating, text }) => (
            <li
              className='bg-white mt-2 p-2 rounded-lg shadow text-black'
              key={id}
            >
              <p className='font-bold'>{text}</p>
              <p>
                {author} - Rating <strong>{rating}/5</strong>
              </p>
            </li>
          ))}
        </ul>
        <form
          className='flex flex-col gap-5 mt-5'
          onSubmit={handleSubmitNewComment}
        >
          <input
            className='p-2 w-full'
            name='comment'
            onChange={(e) => setNewComment(e.target.value)}
            placeholder='Write a comment'
            type='text'
            value={newComment}
          />
          <input
            className='p-2 w-full'
            min={1}
            max={5}
            name='rating'
            onChange={(e) => setNewRating(e.target.value)}
            placeholder='Rating'
            value={newRating}
            type='number'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};
