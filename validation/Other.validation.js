import isEmpty from "is-empty"


export const addProductValid = (req, res, next) => {
    let errors = {}, reqBody = req.body;
    if (isEmpty(reqBody.pname)) {
        errors.pname = 'Product Name is required';
    } else if (reqBody.pname.length < 3 || reqBody.pname.length > 50) {
        errors.pname = 'Product Name must be between 3 and 50 characters';
    }

    if (isEmpty(reqBody.pqty)) {
        errors.pqty = 'Product Quantity is required';
    } else if (!Number.isInteger(Number(reqBody.pqty)) || Number(reqBody.pqty) <= 0) {
        errors.pqty = 'Product Quantity must be a positive integer';
    }

    if (isEmpty(reqBody.pprice)) {
        errors.pprice = 'Product Price is required';
    } else if (isNaN(Number(reqBody.pprice)) || Number(reqBody.pprice) <= 0) {
        errors.pprice = 'Product Price must be a positive number';
    }

    if (!isEmpty(errors)) {
        return res.status(400).json({ 'error': errors })
    }
    return next()
}

