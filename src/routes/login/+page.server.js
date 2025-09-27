import { API_HOST_URL } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
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
    if (response.ok) {
      const responseBody = await response.json();
      cookies.set("token", responseBody.token, { path: "/" });
      console.log(responseBody);
      redirect(303, "/posts");
    }
    return { sucess: true };
  },
};
