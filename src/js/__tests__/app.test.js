import GameSavingLoader from '../GameSavingLoader';

test('Positive test',
  () => GameSavingLoader.load().then((data) => {
    expect(data).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
  }));
