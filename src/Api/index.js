const apiKey = process.env.REACT_APP_API_KEY;

export const createHeaders = () => {
  return {
    "content-type": "application/json",
    "x-api-key": apiKey,
  };
};
