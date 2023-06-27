import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto('filename');
    const userPromise = createUser('Guillaume', 'Salva');

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

