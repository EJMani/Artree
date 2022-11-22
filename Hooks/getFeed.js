import { useInfiniteQuery } from "@tanstack/react-query";

export function getFeedByDate(){
     return useInfiniteQuery({ 
        queryKey: ['posts'], 
        queryFn: async ({pageParam = 0})=>{
            const res  = await fetch('http://54.236.91.239:3000/getByUploadDate?_page='+pageParam);
            const data = res.json();
            return data;
        },
        getNextPageParam: (_lastPage) => _lastPage.posts.length >=2 ? _lastPage._page : undefined
      })
}

export function getFeedByUpvotes(){
  return useInfiniteQuery({ 
     queryKey: ['posts'], 
     queryFn: async ({pageParam = 0})=>{
         const res  = await fetch('http://54.236.91.239:3000/getByUpvotes?_page='+pageParam);
         const data = res.json();
         return data;
     },
     getNextPageParam: (_lastPage) => _lastPage.posts.length >=2 ? _lastPage._page : undefined
   })
}