import getPublicKey from '../../parse-email/utils/getPublicKey';

export default async function handler(req, res) {
  try {
    const entries = req.body

    if (!entries) return res.status(500);

    const results = await Promise.all(entries.map(getPublicKey));

    return res.status(200).json(results);
  } catch (error) {
    console.error(error);

    return res.status(400).send({ error: error.message });
  }
}

