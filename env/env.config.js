import dotenv from 'dotenv';

const envname = process.env.TEST_ENV || 'qa';

dotenv.config({ path : `./env/${envname}.env`, override : true});

module.exports = {
    BASE_URI : process.env.BASE_URI,

    UNAME : process.env.UNAME,

    PASSWORD : process.env.PASSWORD
}