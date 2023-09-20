// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  new Promise((res) => setTimeout(res, 3000)).then(() =>
    res.status(200).json([
      {
        id: '1',
        title: '게시글 제목',
        content: '내용내용내용',
        author: '황예나',
      },
    ])
  );
}
