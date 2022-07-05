// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const status = (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};
export default status;
