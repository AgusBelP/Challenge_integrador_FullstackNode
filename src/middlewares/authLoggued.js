const isUserLogged = (req, res, next) => {
  if (req.session.isLogged) {
   return next();
  }

  return res.status(401).redirect('/auth/login');
}

module.exports = {
    isUserLogged
}