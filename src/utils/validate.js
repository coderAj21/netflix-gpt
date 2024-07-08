
export function validateFormData(email,password){
    const res={
        email:"",
        password:"",
        erro:""
    };
    const checkEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const checkPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!checkEmail){
        res.email="Enter a valid email address or phone number.";
        return res;
    }
    if(!checkPassword){
        res.password="Your password must contain atleast 4 Characters.";
        return res;
    }
    return res;
}