import { useQuery } from '@tanstack/react-query'

export async function getComments(artID){
      const res = await fetch(`http://54.236.91.239:3000/getComments/${artID}`);
      const data = res.json();
      return data;

}

export async function postComment( commentJSON ){
  //console.log(commentJSON)
  const res  = await fetch('http://54.236.91.239:3000/postComment',{
      headers:{'Accept':'application/json',
      'Content-Type': 'application/json'},
      method: 'POST',
      body:JSON.stringify(commentJSON)});
  const data = res.json();
  return data;
}

export async function deleteComment( commentJSON ){
  //console.log(commentJSON)
  const res  = await fetch('http://54.236.91.239:3000/deleteComment',{
      headers:{'Accept':'application/json',
      'Content-Type': 'application/json'},
      method: 'POST',
      body:JSON.stringify(commentJSON)});
  const data = res.json();
  return data;
}