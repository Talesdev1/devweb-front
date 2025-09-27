import { PUBLIC_API_HOST_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";
import { Carta } from "carta-md";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  let id = params.id;

  const response = await fetch(`${PUBLIC_API_HOST_URL}/posts/`);
  if (response.ok) {
    const responseBody = await response.json();
    return { posts: responseBody };
  }
}
