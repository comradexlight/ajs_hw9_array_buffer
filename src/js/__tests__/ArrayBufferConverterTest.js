import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Positive test of the ArrayBufferConverter', () => {
  const abc = new ArrayBufferConverter();
  const buffer = getBuffer();
  abc.load(buffer);
  expect(abc.toString()).toEqual({ data: { user: { id: 1, name: 'Hitman', level: 10 } } });
});
