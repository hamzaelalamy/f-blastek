import express, { Express, Request, Response, NextFunction } from "express";
import { Server } from "http";
import { Socket } from "socket.io";
import { createServer } from "http";

const app: Express = express();
const server: Server = createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
    console.log("a user connected");
    
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
    
});

export { server, io, app };