import { API_HOST_URL } from "$env/static/private";

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies, request }) {
  let body = await request.json();
  console.log(body);

  let token = cookies.get("token");
  const response = await fetch(`${API_HOST_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  try {
    const responseBody = await response.json();
    console.log(responseBody);
  } catch (error) {
    console.log(error);
  }
  return new Response({ status: 201 });
}
