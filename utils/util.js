export default async function fetchData() {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjIyNWJmODM2ZTlhYzdhOWM4Y2ExZjAzYjc0MWE2NiIsIm5iZiI6MTczMDIwNTI1MS40MjkwOSwic3ViIjoiNjQ1YTIxOWIxNTZjYzcwMGUzOWU4YjM0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EZ8gBdTfpd6x6Y7l8cKeg9WTMIkMJhXe8-q4KE1ZlT0",
    },
  };

  let data = await fetch(url, options);
  let posts = await data.json();

  //   console.log(posts.results);
  return posts.results;
}

export async function fetchDetails(url) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjIyNWJmODM2ZTlhYzdhOWM4Y2ExZjAzYjc0MWE2NiIsIm5iZiI6MTczMDIwNTI1MS40MjkwOSwic3ViIjoiNjQ1YTIxOWIxNTZjYzcwMGUzOWU4YjM0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EZ8gBdTfpd6x6Y7l8cKeg9WTMIkMJhXe8-q4KE1ZlT0",
    },
  };

  let data = await fetch(url, options);
  let detail = await data.json();

  console.log(detail);
  return detail;
}
