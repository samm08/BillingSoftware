const indexDao = require('../../utils/mongodb/indexDao')

const registerCompanyDAL = async(reqBody) => {

    try {
        let result = await indexDao.registerCompany(reqBody);
        return result;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    registerCompanyDAL,
}