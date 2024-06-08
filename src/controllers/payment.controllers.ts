import { Request, Response } from "express";
import Client from "../models/client";
import Professional from "../models/professional";
import Payment from "../models/payments";
import Intervention from "../models/intervention";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();


export const getCheckoutSession = async (req: Request, res: Response) => {
  const stripe_secret_key: any = process.env.PAYMENT_SECRET_TOKEN;
  try {

    const stripe = new Stripe(stripe_secret_key);
      if (!stripe) {
          return res.status(404).json({ message: "stripe_secret_key not found" });
      }

      //console.log("Stripe...........................",stripe)
    const intervention = await Intervention.findById(req.body.interventionId);

    if (!intervention) {
      return res.status(404).json({ message: "intervetion not found" });
    }


      console.log("intervention...............", intervention);

    const client = await Client.findById(intervention.clientId);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
      console.log("client...............", client)

      const professional = await Professional.findById(intervention.professionalID);

      console.log("professional...............", professional)

    if (!professional) {
      return res.status(404).json({ message: "professional not found" });
    }
  

    const clientId = client.id;
      console.log("clientId....................", clientId)
      const photoUrl = professional.photo || 'https://example.com/default-photo.jpg';
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
        success_url: "http://localhost:5173/successPaymet",
        cancel_url: "http://localhost:5173/professionals",
        customer_email: client.email,
      client_reference_id: clientId,
      line_items: [
        {
          price_data: {
            currency: "MAD",
            product_data: {
              images: [photoUrl],
              name: intervention.name,
              description: professional.bio||"No descreption provided",
            },
            unit_amount: req.body.price *100, // Update with actual service amount in cents
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        description: "Payment for service",
    },
    });

 
   const paymentIntentId : any= session.payment_intent;


   console.log("paymentIntentId......................",paymentIntentId)

  
    const payment = new Payment({
      interventionId: intervention.id,
        clientId: intervention.clientId,
        professionalId: intervention.professionalID,
      amount: req.body.price,
      gatewayTransactionId: paymentIntentId,
      paymentStatus :"pending",
  
    });

    await payment.save();
    
    res.status(200).json({url:session.url, Message : 'Paid successfully'})
  } catch (error) {

    console.error('Error creating checkout session:', error);
    res.status(500).json({Message:'Error creating checkout session'})
  }
};

export const paymentSuccess=(req:Request,res:Response)=>{

res.status(200).json({Message:'the payment successed '})

}
export const paymentFailed=(req:Request,res:Response)=>{

    res.status(500).json({Message:'the payment failed '})
    
    }