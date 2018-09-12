const expect = require('expect');

const { generateMessage } = require('./message');

describe('gererateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'dpyzo0o';
    let text = 'some message';
    let message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, text });
  });
});
