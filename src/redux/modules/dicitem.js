import {db} from "../../firebase"
import { collection, getDocs, getDoc, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore"
import { async } from "@firebase/util"


const CREATE = "dic/CREATE"
const LOAD = "dic/LOAD"
const DELETE = "dic/DELETE"
const UPDATE =  "dic/UPDATE"


const initialState = {
    list : [
        {completed :false, ex: "i'm from korea", mean:"대한민국", word :"korea"},
        {completed :false, ex: "i'm dori", mean:"도리", word :"dori"}
    ]
}



export function createDic(dic){
    return {type: CREATE, dic}
}

export function loadDic(dic_list){
    console.log("로드액션 생성");
    return{type : LOAD, dic_list};
}

export function deleteDic(dic_index){
    return{type : DELETE, dic_index }
}

export function updateDic(dic_index,dic_id){
    return{type : UPDATE, dic_index, dic_id}
}


export const loadDicFB = () => {
    return async function (dispatch) {
        const dic_data = await getDocs(collection(db, "English")); //불러올 데이터베이스 명

        let dic_list = [];
        dic_data.forEach((doc)=> {
            // console.log(doc.data())    //데이터 읽어오기 .data()
            dic_list.push({id:doc.id , ...doc.data()});
        });

        // console.log(dic_data);
        // console.log(dispatch(loadDic(dic_list)), "데이터 불러왔나?");
        dispatch(loadDic(dic_list));
    }   
}

export const addDicFB = (dic) => {
    return async function(dispatch) {
       const docRef = await addDoc(collection(db, "English"), dic);
        // console.log((await getDoc(docRef)).data());
        //리덕스에 넣기
        const _dic = await getDoc(docRef);
        const newdic = {id: _dic.id, ..._dic.data()};
        // console.log(newdic);
        //액션을 새롭게 생성하고 보내서 액션->리듀서 저장까지
        dispatch(createDic(newdic))

    }
}



export const deleteDicFB = (dic_id) => {
    return async function (dispatch, getState) {
        if(!dic_id){
            window.alert("아이디 값이 안드감")
            return;
        }
        // console.log(getState().dicitem.list)
        const docRef = doc(db, "English", dic_id);
        await deleteDoc(docRef);
        const _dic_list = getState().dicitem.list;
        const dic_index = _dic_list.findIndex((dic) =>{
            return dic.id ===dic_id;
         });

         dispatch(deleteDic(dic_index))
    }
}

export const changeDicFB = (dic_id) => {
    return async function(dispacth, getState){
        const docRef = doc(db, "English", dic_id.id.id);
        await updateDoc(docRef, {completed:true, 
                                ex: dic_id.ex, 
                                mean: dic_id.mean,
                                word:dic_id.word });

        const _dic_list = getState().dicitem.list;
        const dic_index = _dic_list.findIndex((dic) =>{
            return dic.id ===dic_id.id.id;
         });    
         
         dispacth(updateDic(dic_index, dic_id))                  
    }
}




export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case "dic/CREATE": {
            const new_dic_list = [...state.list, action.dic];
            // console.log(new_dic_list);
            return {list : new_dic_list};
            }

        case "dic/DELETE": {
            const new_dic_list = state.list.filter((item, index)=>{
                return parseInt(action.dic_index)!==index;
            })
            // console.log("지웠어!", new_dic_list)
            return {list : new_dic_list};
        }   

        case "dic/UPDATE": {
            const new_dic_list = state.list.map((item, index)=>{
                if (parseInt(action.dic_index) === index){
                    console.log(action.dic_id, "이게 맞아야할텐데")
                    return{completed:action.dic_id.completed, word:action.dic_id.word,
                            ex: action.dic_id.ex, mean:action.dic_id.mean, id : action.dic_id.id.id}
                }else return item;
                
            })
            console.log("바꿨어",new_dic_list )
            return {list : new_dic_list};
        }

        case "dic/LOAD":{
            return {list : action.dic_list};
        }
        default:
            return state;
        }
    
    
}