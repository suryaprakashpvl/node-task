import isEmpty from "is-empty"




    export const userRegisterValid = (req, res, next) => {
        let errors = {}, reqBody = req.body;
    
        if (isEmpty(reqBody.userName)) {
            errors.userName = 'UserName is required';
        }
    
        if (isEmpty(reqBody.email)) {
            errors.email = 'Email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(reqBody.email)) {
                errors.email = 'Invalid email format';
            }
        }
    
        if (isEmpty(reqBody.countrycode)) {
            errors.countrycode = 'CountryCode is required';
        }
            if (isEmpty(reqBody.phone)) {
            errors.phone = 'Phone is required';
        }
            if (isEmpty(reqBody.password)) {
            errors.password = 'Password is required';
        } else {
            const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
           
            if (!passwordRegex.test(reqBody.password)) {
                errors.password = 'Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character';
            }
        }
            if (isEmpty(reqBody.confirmPassword)) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (reqBody.password !== reqBody.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
    
        if (!isEmpty(errors)) {
            return res.status(400).json({ 'error': errors });
        }
    
        return next();
    };
    


    export const userLoginValid = (req, res, next) => {
        let errors = {}, reqBody = req.body;
    
        if (isEmpty(reqBody.email)) {
            errors.email = 'Email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(reqBody.email)) {
                errors.email = 'Invalid email format';
            }
        }
        if (isEmpty(reqBody.password)) {
            errors.Password = 'Password is required'
        }
        if (!isEmpty(errors)) {
            return res.status(400).json({ 'error': errors })
        }
        return next()
    }