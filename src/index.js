const express = require('express')
const mainRouter = require('./routes/index')
const bodyParser = require('body-parser')
const cron = require('node-cron');
const {Task} = require('./db'); 
const {User} = require('./db'); 
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')
const client = new twilio.Twilio(accountSid,authToken);

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',mainRouter)


app.listen(3000,()=>{
    
    cron.schedule('0 0 * * *', async () => {
        try {
            // Query tasks from the database based on their due dates
            const tasks = await Task.find({ dueDate: { $lt: new Date() } });
    
            // Update task priorities based on due dates
            tasks.forEach(async task => {
                // Update priority based on task due date logic
                task.priority = calculatePriority(task.dueDate);
                await task.save();
            });
        } catch (error) {
            console.error('Error updating task priorities:', error);
        }
    });
    
    
    cron.schedule('0 * * * *', async () => {
        try {
          
            const overdueTasks = await Task.find({ dueDate: { $lt: new Date() } });
    
           
            for (const task of overdueTasks) {
                const user = await User.findById(task.user);
                const priority = user.priority; 
    
                
                if (!user.called) {
                    
                    const call = await twilioClient.calls.create({
                        url: 'http://demo.twilio.com/docs/voice.xml',
                        to: user.phoneNumber, 
                        from: '+14242275383'
                    });
    
                    console.log(`Initiated call to ${user.name} at ${user.phoneNumber}`);
    
                    user.called = true;
                    await user.save();
                }
            }
        } catch (error) {
            console.error('Error initiating voice calls:', error);
        }
    });
    
    
    async function calculatePriority(dueDate) {
        const date = new Date();
        const tasks = await Task.find({ due_date: { $lt: new Date() } });
         
        tasks.forEach((task)=>{
            if(dueDate<=date){
                tasks.priority=task.priority-1
            }
        })
        
    }
    
    console.log('server start at port 3000')
})