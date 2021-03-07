class ValidateHelper {
    static regexpName = /\S/;
    static regexpEmail = /^\S+@\S+$/;
    static regexpPassword = /^\S+$/;

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
