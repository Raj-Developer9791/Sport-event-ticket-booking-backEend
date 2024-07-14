

module.exports=mongoose=>{
    const tutorial=mongoose.model(
        "Events Booking",
        mongoose.Schema(
            {
                Name:{type:String, required:true,} ,
                Email:{type:String, required:true,} ,
                Phoneno:{type:String, required:true,} ,
                city:{type:String, required:true,} ,
                Address:{type:String, required:true,} 
            },
            {timestamp:true}
        )   
    );
        return tutorial
};