// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import slidesData from '../../../data/data.json';

export default function handler(req, res) {
  res.status(200).json(slidesData.banners);
}
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
