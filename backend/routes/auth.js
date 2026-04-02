const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const db = require('../config/db');


/*
REGISTER USER
POST /api/register
*/

router.post('/register', async (req, res) => {

  try {

    const { name, email, password, phone } = req.body;

    // check if email already exists
    const [existing] = await db.query(
      'SELECT * FROM users WHERE email=?',
      [email]
    );

    if (existing.length > 0) {
      return res.json({
        success:false,
        message:'Email already registered'
      });
    }

    // encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert user
    await db.query(
      'INSERT INTO users (name,email,password,phone) VALUES (?,?,?,?)',
      [name,email,hashedPassword,phone]
    );

    res.json({
      success:true,
      message:'Account created successfully'
    });

  }
  catch(error){

    console.log(error);

    res.json({
      success:false,
      message:'Server error'
    });

  }

});

/*
LOGIN USER
POST /api/login
*/

router.post('/login', async (req, res) => {

  try{

    const { email, password } = req.body;

    // check if user exists
    const [users] = await db.query(

      'SELECT * FROM users WHERE email=?',

      [email]

    );

    if(users.length === 0){

      return res.json({

        success:false,
        message:'User not found'

      });

    }


    const user = users[0];

    // compare password
    const match = await bcrypt.compare(password, user.password);


    if(!match){

      return res.json({

        success:false,
        message:'Wrong password'

      });

    }


    res.json({

      success:true,
      message:'Login successful',
      user:{
        id:user.user_id,
        name:user.name,
        email:user.email
      }

    });

  }
  catch(error){

    console.log(error);

    res.json({

      success:false,
      message:'Server error'

    });

  }

});

module.exports = router;