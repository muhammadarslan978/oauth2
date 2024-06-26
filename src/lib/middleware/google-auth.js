import passport from 'passport';

export const authenticateGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });

export const googleCallback = passport.authenticate('google', {
  failureRedirect: '/',
  successRedirect: '/auth/profile',
});
