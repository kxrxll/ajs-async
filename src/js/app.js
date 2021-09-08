import GameSavingLoader from './GameSavingLoader';

(async function gameSavingLoader() {
  try {
    const data = await GameSavingLoader.load();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}());
