const { uploadPhoto, createUser } = require('../utils');

describe('uploadPhoto', () => {
  test('returns the correct response format', () => {
    const response = uploadPhoto();
    expect(response).toEqual({
      status: 200,
      body: 'photo-profile-1',
    });
  });
});

describe('createUser', () => {
  test('returns the correct response format', () => {
    const response = createUser();
    expect(response).toEqual({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  });
});

