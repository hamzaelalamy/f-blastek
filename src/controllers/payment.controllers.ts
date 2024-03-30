import { Request, Response } from "express";
import Client from "../models/client";
import Professional from "../models/professional";
import Payment from "../models/payments";
import Intervention from "../models/intervention";
import Stripe from "stripe";
import dotenv from "dotenv";
import { json } from "body-parser";
dotenv.config();


export const getCheckoutSession = async (req: Request, res: Response) => {
  const stripe_secret_key: any = process.env.PAYMENT_SECRET_TOKEN;
  try {

    const stripe = new Stripe(stripe_secret_key);
    const intervention = await Intervention.findById(req.body.interventionId);

    if (!intervention) {
      return res.status(404).json({ message: "intervetion not found" });
    }
    const client = await Client.findById(intervention.clientId);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    const professional = await Professional.findById(req.params.professionalId);

    if (!professional) {
      return res.status(404).json({ message: "professional not found" });
    }
  

    const email = client.email;
    const clientId = client.id;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://127.0.0.1/paymentSuccess",
      cancel_url: "http://127.0.0.1/paymentCancel",
      customer_email: email,
      client_reference_id: clientId,
      line_items: [
        {
          price_data: {
            currency: "MAD",
            product_data: {
              name: intervention.name,
              description: professional.bio,
            },
            unit_amount: 10000, // Update with actual service amount in cents
          },
        },
      ],
    });
    const payment = new Payment({
      interventionId: intervention.id,
      clientId: client.id,
      professionalId: intervention.professionaliD,
      amount: req.body.price,
      gatewayTransactionId: session.id,
  
    });

    await payment.save();
    res.status(200).json({Message : 'Paid successfully'})
  } catch (error) {

    res.status(500).json({Message:'Error creating checkout session'})
  }
};

export const paymentSuccess=(req:Request,res:Response)=>{

res.status(200).json({Message:'the payment successed '})

}
export const paymentFailed=(req:Request,res:Response)=>{

    res.status(500).json({Message:'the payment faild '})
    
    }