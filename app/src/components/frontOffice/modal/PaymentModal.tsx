import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import { actPostPayments } from "../../../slices/payment/ActPayment";
import { actPostInterventions } from "../../../slices/intervention/ActIntervention";
import { Input, Button, Modal, TimePicker } from "antd";
import moment from "moment";
// import { useHistory } from 'react-router-dom';


function PaymentModal({ record}) {

    const data={
        name: record.specialization,
  clientId: "660dfce8ee928a87348797d5",
  professionalID:record._id ,
  status:"pending" ,
    }
    // const history = useHistory();
    const dispatch = useAppDispatch();
  const [hours, setHours] = useState(0);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
// const intervention= useAppSelector(
//   (state) => state.interventions
// )

// const PaymentData={
//   interventionId:intervention.records._id,
//   price:record.hourlyRate,
// }
  const calculateTotal = () => {
    if (startTime && endTime) {
      const start = moment(startTime);
      const end = moment(endTime);

      // Make sure both times are valid moment objects
      if (start.isValid() && end.isValid()) {

        const duration = end._i.$H - start._i.$H
        // const duration = moment.duration(end.diff(start));
       

       // const hours = duration.asHours();
        console.log("duration", duration);

        setHours(duration);
        console.log("hours", hours);

      }
    }
  };

  useEffect(() => {
    setTotal(hours * record.hourlyRate);
  }, [hours, record.hourlyRate]);

  useEffect(() => {
    calculateTotal();
  }, [startTime, endTime]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    try {
      const resultAction = await dispatch(actPostInterventions(data));
      if (actPostInterventions.fulfilled.match(resultAction)) {
        const interventionId = resultAction.payload._id; // Assuming the response has the intervention id
        const PaymentData = {
          interventionId: interventionId,
          price: total,
        };
        const paymentResult = await dispatch(actPostPayments(PaymentData));
        if (actPostPayments.fulfilled.match(paymentResult)) {
          const stripeUrl = paymentResult.payload.url; // Assuming the response has the Stripe URL
          window.location.href = stripeUrl; // Redirect to Stripe payment page
        }
        setOpen(false);
      }
    } catch (err) {
      console.error("Failed to create intervention or payment: ", err);
    } finally {
      setConfirmLoading(false);
    }

    // dispatch(actPostInterventions(data))
    // dispatch(actPostPayments(PaymentData))
    // setTimeout(() => {
    //   setOpen(false);
    //   setConfirmLoading(false);
    // }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };
 
  return (
    <div className="w-full">
      <Button
        type="primary"
        className="block w-full text-blue-800 text-sm font-semibold rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs py-6 my-4"
        onClick={showModal}
      >
        Book Now
      </Button>
      <Modal
        title="Book Now"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p className="font-bold text-orange-700 my-5">
          Price Per Hour: <span className="text-orange-500">{record.hourlyRate} DH</span>
        </p>
        <p className="my-4">Choose the Day you want to book:</p>
        <select
       
          onChange={handleDayChange}
          className="my-4 w-full p-2 border rounded"
        >
          <option value="">Select a day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <p className="my-4">Enter the time range you want to book:</p>
        
        <TimePicker
          use12Hours
          format="h:mm a"
          // onChange={handleStartTimeChange} 
          onChange={(time) => setStartTime(time)}
          placeholder="Start Time"
          className="my-4 w-full"
        />
        <TimePicker
          use12Hours
          format="h:mm a"
          // onChange={handleEndTimeChange} 

          onChange={(time) => setEndTime(time)}
          placeholder="End Time"
          className="my-5 w-full "
        />

        <p className=" font-bold mt-5"> You booked <span className="text-orange-700"> {hours} H</span>  in <span className="text-orange-700">  {selectedDay} </span> </p>
        <p className="font-bold text-orange-700 my-4">THE TOTAL PRICE:</p>

        <p className="text-orange-500 font-bold">{total.toFixed(2)} DH</p>
      </Modal>
    </div>
  );
}

export default PaymentModal;
