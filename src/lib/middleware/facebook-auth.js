import passport from 'passport';

export const authenticateFacebook = passport.authenticate('facebook', { scope: ['email'] });

export const facebookCallback = passport.authenticate('facebook', {
  failureRedirect: '/',
  successRedirect: '/auth/profile',
});
