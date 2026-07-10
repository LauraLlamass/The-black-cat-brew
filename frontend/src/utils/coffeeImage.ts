const API_URL = "https://the-black-cat-brew.onrender.com";

export function getCoffeeImageUrl(image: string) {
  // Coffee images are shipped with the frontend so they do not have to wait for
  // the API server (which may be waking up on Render).
  if (image.startsWith("/images/")) return image;

  return `${API_URL}${image}`;
}
