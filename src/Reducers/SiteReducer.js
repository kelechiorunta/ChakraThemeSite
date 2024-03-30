import { SLICE, SELECTBYDETAIL } from "../Actions/actions";
import pic1 from '../Slides/picimg1.jpg'
import pic2 from '../Slides/picimg2.jpg'
import pic3 from '../Slides/picimg3.jpg'

export const initialState = {
    slides:[{id:1, pic:pic1},
            {id:2, pic:pic2},
            {id:3, pic:pic3},
            ]
}

export const siteDetails = {
    contentBody:[{ id:1, title:'Vision', details:'Our Vision is seeking to reach out to serve you better.'},
                 { id:2, title:'Introduction', details:'The name WEBCHAKA derives its significance in the chakra UI library of React'},
                 { id:3, title:'Slogan', details:'A Touch Of Excellence'}
                ]
}


export const slideReducer = (state= siteDetails, action) =>{
                    switch(action.type){
                        case SELECTBYDETAIL:{
                            const { info } = action.payload
                            const { id } = info
                            return {...state, contentBody:[...state.contentBody.filter(item=>item.id===id)]}
                        }
                        // case SLICE:{
                        //     const { actionId, id_pic } = action.payload
                        //     return {...state, slides:[...state.slides.filter(s=>s.pic !== state.slides[(id_pic % state.slides.length)-1].pic), {id: actionId,  pic: state.slides[(id_pic % state.slides.length)-1].pic}]}
                        // }
                        default:{
                            return state
                        }
                    }
}

export default slideReducer