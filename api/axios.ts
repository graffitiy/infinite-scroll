export const fetchCardData = async (api) => {
  try {
    const response = await fetch(api, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};