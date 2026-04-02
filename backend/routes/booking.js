const express = require('express');
const router = express.Router();

const db = require('../config/db');


router.post('/bookings', async (req, res) => {

try{

const {

user_id,
destination_city,
hotel_or_vehicle,
price,
payment_method,
travel_date

} = req.body;


await db.query(

`INSERT INTO bookings
(user_id,destination_city,hotel_or_vehicle,price,payment_method,booking_date,travel_date,status)

VALUES (?,?,?,?,?,CURDATE(),?,'confirmed')`,

[
user_id,
destination_city,
hotel_or_vehicle,
price,
payment_method,
travel_date
]

);


res.json({

success:true,
message:'Booking saved'

});

}
catch(error){

console.log(error);

res.json({

success:false,
message:'Booking failed'

});

}

});


module.exports = router;