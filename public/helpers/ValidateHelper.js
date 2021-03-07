class ValidateHelper {
    static validators = {
        name: ValidateHelper.validateName,
        email: ValidateHelper.validateEmail,
        password: ValidateHelper.validatePassword,
    }

    static regexpName = /\S/;
    static regexpEmail = /^\S+@\S+$/;
    static regexpPassword = /^\S+$/;

    /**
     *
     * @param {Map} collection
     */
    static validate(collection) {
        return true;
    }

    /**
     * Name syntax validation
     * @param {String} name
     */
    static validateName(name) {
        return ValidateHelper.regexpName.test(name.trim());
    }

    /**
     * Email syntax validation
     * @param {String} email
     */
    static validateEmail(email) {
        return ValidateHelper.regexpEmail.test(email.trim());
    }

    /**
     * Password syntax validation
     * @param {String} password
     */
    static validatePassword(password) {
        return ValidateHelper.regexpPassword.test(password);
    }

}
