
// mongoDB
// mongorestore --uri mongodb+srv://jgy_98:<PASSWORD>@cluster0.kkxfx9g.mongodb.net 
export default function handler(req, res) {
  res.status(200).json({
    name: 'jgy'
  })
}