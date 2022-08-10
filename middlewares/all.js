
// next-connect 모듈을 이용해서 미들웨어를 설정하고 다시 리턴해주는 형식.
import nc from 'next-connect';
// 우리가 사용할 미들웨어 파일들 (database.js, session.js)
import passport from 'middlewares/passport';
import database from './database';
import session from './session';

const all = nc();

all.use(database).use(session).use(passport.initialize()).use(passport.session());

export default all;