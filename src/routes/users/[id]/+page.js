import { PUBLIC_API_HOST_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";
import { Carta } from "carta-md";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  let userId = params.id;

  const response = await fetch(`${PUBLIC_API_HOST_URL}/posts/${userId}`);
  if (response.ok) {
    const responseBody = await response.json();
    let username =
      responseBody.length > 0 ? responseBody[0].owner_username : "";
    return { posts: responseBody, username: username };
  }
}
