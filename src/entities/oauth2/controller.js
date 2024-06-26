export default {
  profile: async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      res.status(200).json({ user: req.user });
    } catch (err) {
      return res.status(500).json({ code: 0, messaage: err.messaage });
    }
  },
  logout: async (req, res) => {
    try {
      req.logout((err) => {
        if (err) {
          return res.status(500).json({ code: 0, messaage: err.messaage });
        }
        res.redirect('/');
      });
    } catch (err) {
      return res.status(500).json({ code: 0, messaage: err.messaage });
    }
  },
};
