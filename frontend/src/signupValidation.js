function Validation(values){
    let error={}
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(values.name === ""){
        error.name = "Name is required"
    }
    else{
        error.name = ""
    }

    if(values.email === ""){
        error.email = "Email is required"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email didn't match"
    }else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password is required"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    }else{
        error.password = ""
    }
    return error;
}

export default Validation;