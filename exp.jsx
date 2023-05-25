import React ,{useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function RegisterValid(){
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const [gender,setGender] =useState('');
    const [checked,setChecked] =useState([]);

    function handleSubmit(e){
        e.preventDefault();
        if(user===""){toast("no username entered");}
        else if(pass===""){toast("no password entered");}
        else if(cpass===""){toast("no confirm password entered");}
        else if(pass !== cpass){toast("verify the password")}
        else if(gender.length === 0 ){toast("enter your gender")}
        else if(checked.length < 2){toast("atleast select 2 ")}
        console.log("username: "+user);
        console.log("password: "+pass);
        console.log("Gender: "+gender);
        console.log("Area of interest: "+checked);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                Username: <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/> <br />
                Password: <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/> <br />
                confirm Password: <input type="text" value={cpass} onChange={(e)=>setCpass(e.target.value)}/> <br />
           
            Gender: <div onChange={(e)=>setGender(e.target.value)}>
                <input type="radio" name="gender" value="male" />male
                <input type="radio" name="gender" value="female" />female
            </div>

            Area of interest <div onChange={(e)=>setChecked((cr)=>{
                // if duplicates not exit updated current array
                if(!cr.includes(e.target.value))
                return[...cr, e.target.value];
                // if duplicate exist remove duplicate from current array
              return cr.filter(c=>c !== e.target.value);
            })}>
                 <input type="checkbox" value="DS"/>DS
                <input type="checkbox" value="ML"/>ML
                <input type="checkbox" value="AI"/>AI
                </div>
                <input type="submit" value="submit" />
            </form>
            <ToastContainer/>
    </>
    )
  

}
export default RegisterValid