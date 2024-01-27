// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  <div>
    <h1>Dashboard</h1>
    <p>Dashboard content</p>

    <arguments></arguments>
    <button type="button"> SELECT </button>
  </div>
  req
  res.status(200).json({ name: 'John Doe' })
}
