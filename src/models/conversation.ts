import { Schema, model, Document } from "mongoose";

interface IMessage {
  senderId: Schema.Types.ObjectId;
  content: string;
  timestamp: Date;
  seen?: boolean;
}

interface IConversation extends Document {
  participants: Schema.Types.ObjectId[];
  messages: IMessage[];
}

const conversationSchema = new Schema<IConversation>({
  participants: [
    { type: Schema.Types.ObjectId, ref: "professional", required: true },
    { type: Schema.Types.ObjectId, ref: "client", required: true },
  ],
  messages: [
    {
      senderId: { type: Schema.Types.ObjectId, ref: "user", required: true },
      content: { type: String, required: true },
      timestamp: { type: Date, required: true },
      seen: { type: Boolean, default: false },
    },
  ],
});

const Conversation = model<IConversation>("Conversation", conversationSchema);

export default Conversation;