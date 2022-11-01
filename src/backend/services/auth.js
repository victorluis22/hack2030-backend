import bcrypt from 'bcrypt'

export const createPasswordHash = async (password) =>{
    return await bcrypt.hash(password, 8)
}

export const checkPassword = async (user, password) => {
    return await bcrypt.compare(password, user.password)
}