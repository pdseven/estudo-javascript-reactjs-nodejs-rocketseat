import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'hello GoStack' })
})
app.listen(3333, () => {
  console.info('Server started on port 3333!')
})
 