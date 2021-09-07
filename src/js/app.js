import GameSavingLoader from './GameSavingLoader';

export default async () => {
  try {
    const data = await GameSavingLoader.load();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
