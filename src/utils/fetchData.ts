//handels api request
export const fetchData = async (
  url: string,
  setBallotData: React.Dispatch<React.SetStateAction<never[]>>
) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    await setBallotData(data.items);
  } catch (error) {
    console.log('error', error);
  }
};
