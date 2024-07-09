import { useQuery } from '@tanstack/react-query'
import { Comment } from '../../../../examples/module1/lesson5/app-performance/types/Comment.ts';
import axios from 'axios'

export const useComments = (url: string) => {
  const comments = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const response = await axios.get<{comments: Comment[]}>(url)

      return response.data.comments
    }
  })


  return comments
}
