export const password_validation = {
    name: "password",
    label: "password",
    type: "password",
    id: "password",
    validation: {
        required: {
            value: true,
            message: "Password is required"
        },
        pattern: {
            value: /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$&])[a-zA-Z0-9!#$%]{/,
            message: "Password should have 1 letter and 1 number"
        },
        minLength: {
            value: 8,
            message: "Password has to be at least 8 characters long"
        }
    }
}