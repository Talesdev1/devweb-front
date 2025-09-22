import { API_HOST_URL } from "$env/static/private";

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    const response = await fetch(`${API_HOST_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseBody = await response.json();
    console.log(responseBody);
    return { sucess: true };
  },
};
