import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
// import socketIO from "socket.io";

export default (app, http) => {
  app.use(express.json())
  app.use(cors())
  mongoose.connect('mongodb://localhost/badminton_game')
  const db = mongoose.connection
  db.on('error', () => {
    console.log('mongoose error')
  })
  db.once('open', () => {
    console.log('mongoose connection')
  })
  require('./routes/index')(app)
  //
  // app.get('/foo', (req, res) => {
  //   res.json({msg: 'foo'});
  // });
  //
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  //
  // optional support for socket.io
  //
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
