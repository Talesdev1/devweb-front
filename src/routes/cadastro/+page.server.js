import { API_HOST_URL } from "$env/static/private";

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const confirm_password = data.get("confirmPassword");

    const response = await fetch(`${API_HOST_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirm_password: confirm_password,
      }),
    });
    if (response.ok) {
      const responseBody = await response.json();
      console.log(responseBody);
      cookies.set("token", responseBody.token, { path: "/" });
      redirect(303, "/posts");
    }
    return { sucess: true };
  },
};
