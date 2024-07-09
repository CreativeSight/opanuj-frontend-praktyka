import { Article } from './../../../../examples/module1/lesson1/react-hooks/types';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useArticles = (url: string) => {
  return useQuery({
    queryKey: ['articles'], 
    queryFn: async () => {
      const response = await axios.get<{articles: Article[]}>(url);
      
      return response.data.articles
    }
  })
}