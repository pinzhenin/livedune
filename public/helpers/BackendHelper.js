class BackendHelper {
    /**
     * User login
     * @param {String} email
     * @param {String} password
     */
    static login(email, password) {
        return new Promise((resolve) => {
            const success = (email === 'example@example.com') && (password === 'password2021');
            setTimeout(() => resolve(success), 1000); // Backend request emulation
        });
    }

    /**
     * User registration
     * @param {String} name
     * @param {String} email
     * @param {String} password
     * @param {String} promoCode
     */
    static registration(name, email, password, promoCode) {
        return new Promise((resolve) => {
            const success = (email !== 'example@example.com');
            setTimeout(() => resolve(success), 1000); // Backend request emulation
        });
    }

    /**
     * Resend email
     * @param {String} email
     */
    static resendEmail(email) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(true), 1000); // Backend request emulation
        });
    }

    /**
     * Resend email
     * @param {String} email
     */
    static restorePassword(email) {
        return new Promise((resolve) => {
            const success = (email === 'example@example.com');
            setTimeout(() => resolve(success), 1000); // Backend request emulation
        });
    }
}
