const TMBD_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;

let kw = "";
let pn;
let sw = "";

export default async function fetchData(
  keyword = "now_playing",
  pageno = 1,
  searchword = ""
) {
  try {
    let url = `https://api.themoviedb.org/3/movie/${keyword}?language=en-US&page=${pageno}`;
    kw = keyword;
    pn = pageno;
    sw = searchword;

    if (searchword !== "") {
      url = `https://api.themoviedb.org/3/search/movie?query=${searchword
        .split(" ")
        .join("+")}&page=${pageno}`;
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + TMBD_TOKEN,
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Error handling for non-200 status
    }

    const data = await response.json();
    // console.log(url, data);
    return data.results;
  } catch (err) {
    console.log(err.message); // Set error message if fetch fails
    return null;
  }
}

export async function fetchDetails(url) {
  //   const TMBD_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;
  //   console.log(TMBD_TOKEN);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TMBD_TOKEN,
    },
  };

  let data = await fetch(url, options);
  let detail = await data.json();

  return detail;
}

export async function fetchAgain() {
  try {
    let url = `https://api.themoviedb.org/3/movie/${kw}?language=en-US&page=${pn}`;

    if (sw !== "") {
      url = `https://api.themoviedb.org/3/search/movie?query=${sw
        .split(" ")
        .join("+")}&page=${pageno}`;
    }

    console.log(url);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + TMBD_TOKEN,
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Error handling for non-200 status
    }

    const data = await response.json();
    // console.log(url, data);
    return data.results;
  } catch (err) {
    console.log(err.message); // Set error message if fetch fails
    return null;
  }
}
