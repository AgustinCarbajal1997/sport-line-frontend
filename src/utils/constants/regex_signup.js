const ONLY_LETTERS = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const REGULAR_EXPRESSION = {
    name:ONLY_LETTERS,
    lastname:ONLY_LETTERS,
    mail:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    cellphone:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    address:/^\s*\S+(?:\s+\S+){2}/,
    confirmPassword:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

}
export default REGULAR_EXPRESSION;