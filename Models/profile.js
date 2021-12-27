const mongoose=require('mongoose');

const profileSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    handel:{
        type:String,
        required:true,
        max:40
    },
    status:{
         type:String,
         required:true
    },
    skills:{
        type:[String],
        required:true
    },
    company:{
        type:String
    },
    website:{
        type:String
    },
    location:{
        type:String
    },
    bio:{
        type:String
    },
    githubusername:{
        type:String
    },
    experience:[
        {
            title:{
                type:String,
                requried:true
            },
            company:{
                type:String,
                required:true
            },
            location:{
                type:String
            },
            from:{
                type:Date,
                required:true
            },
            to:{
                type:Date
            },
            current:{
                type:Boolean,
                default:false
            },
            description:{
                type:String
            }
        }
    ],
    education:[
        {
            school:{
                type:String,
                requried:true
            },
            degree:{
                type:String,
                required:true
            },
            fieldofstudy:{
                type:String,
                required:true
            },
            from:{
                type:Date,
                required:true
            },
            to:{
                type:Date
            },
            current:{
                type:Boolean,
                default:false
            },
            description:{
                type:String
            }
        }
    ],
    social:{
        youtube:{
            type:String
        },
        twitter:{
            type:String
        },
        facebook:{
            type:String
        },
        linkedin:{
            type:String
        },
        instgram:{
            type:String
        },
    },
    date:{
        type:Date,
        default:Date.now()
    }
},{versionKey:false});

module.exports=Profile=mongoose.model('profile',profileSchema);