import { API, API_KEY } from "../base";

export const request = async (options = {}) => {
  const response = await fetch(`${API}${API_KEY}`, options);
  return await response.json();
};
