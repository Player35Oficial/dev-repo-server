token: jwt.sign({ id }, auth.secret, {
expiresIn: "7d",
}),
