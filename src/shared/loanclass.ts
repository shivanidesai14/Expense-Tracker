export class loanclass
{
    constructor(public loan_id:Number,public fk_user_email:String,public loan_date:String,public loan_amt:Number,public loan_rate:Number,public loan_yrs:Number,public loan_emi:Number)
    {
        
    }
}