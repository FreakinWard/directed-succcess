import { NextApiRequest, NextApiResponse } from 'next';

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.key !== process.env.REVALIDATE_KEY) {
      return res.status(401).json({ message: 'Invalid revalidation key' });
    }

    await res.revalidate('/');
    await res.revalidate('/health');

    return res.json({ revalidated: true, timestamp: new Date().toISOString() });
  } catch (err) {
    // TODO: log to app insights
    return res.status(500).send('Error revalidating');
  }
}
