export const SLICE = 'SLICE'
export const SELECTBYDETAIL = 'SELECTBYDETAIL'
export const LOGIN_SAVE = 'LOGIN_SAVE'

let nextid = 3
let userid = 0

export const slice_msg = (id_pic) =>({
    type: SLICE, payload:{ actionId: nextid++, id_pic }
})

export const selectByDetail = (detail) =>({
    type: SELECTBYDETAIL, payload: {detail}
})

export const loginsave = (email, password) => ({
    type: LOGIN_SAVE, payload: { id: userid++, email, password }
})