// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// /api/hello
export default function handler(req, res) {
  if (req.methodd == "POST"){
    // let hello = req.body.hello_message
    // database.create(hello)
    res.status(200).json({"hello_messages":"Hello world"})

  }
  else if (req.method === "GET"){
    // let hello_messages = database.find()
    res.status(200).json({"hello_messages":"Hello world"})
  }
  res.status(200).json({ name: 'John Doe' })
}
