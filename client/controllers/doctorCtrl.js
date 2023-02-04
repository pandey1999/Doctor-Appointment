const doctorModel = require("../models/doctorModel");

const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "Doctor data fetch success",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching Doctor Details",
    });
  }
};

const updateProfileController = async(req,res) =>{
    try {
        const doctor =await doctorModel.findOneAndUpdate({userId:req.body.userId}, req.body)
        res.status(201).send({
            success:true,
            message:"Doctor Profile Updated ",
            data:doctor
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Doctor Profile Update Failed"
        })
      
        
    }

}

const getDoctorByIdController =async(req,res) =>{
  try {
    const doctor = await doctorModel.findOne({_id:req.body.doctorId})
    res.status(200).send({
      success:true,
      message:"Successfully Doctor Info fetched",
      data:doctor
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      error,
      message:"Error in single doctor info"

    })
    
  }

}

module.exports = { getDoctorInfoController ,updateProfileController ,getDoctorByIdController};
