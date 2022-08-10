
// next-connect 모듈은 NextJS에서 api 라우팅을 쉽게 해주는 모듈이다. (npm install next-connect로 설치)
import nc from 'next-connect';
import { all } from '../../../middlewares/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  // Filter out password
  if (!req.user) return res.json({ user: null });
  const { password, ...u } = req.user;
  res.json({ user: u });
});

export default handler;