module.exports = (error, req, res) => {
    let msg = "Reponse genrated Successfully";
    if (!res.locals.rootData) {
        msg = "Root is not Set";
    } else {
        if (res.locals.message) {
            msg = res.locals.message
        }
    }
    const response = {
        success : true,
        displayMessage: res.locals.displayMessage || "",
        message: msg,
        description: res.locals.description,
        resultObj: res.locals.rootData || {}
    }

    res.send(response)
}