import './Message.css'
import { auth } from '../Login/Config';
import { Popconfirm ,message} from 'antd';
export default function Message(prop){
    function confirm(e) {
        console.log(e);
      }
      
      function cancel(e) {
        console.log(e);
      }
      
    return(
        <div className={auth.currentUser.uid === prop.from ? 'mesent' : 'othersent'}>
                <Popconfirm
                    placement='topLeft'
                    title={`Được gửi lúc ${prop.createAt}`}
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Ok"
                    cancelText="Cancel"
                >
                {prop.img!== ''? (
                    <div className={auth.currentUser.uid === prop.from ? 'mesent-field' : 'othersent-field'}>
                        <img src={prop.img} className='message-img'></img>
                    </div>
                ) : (<></>) }
                {prop.text!== '' ?(
                <div className={auth.currentUser.uid === prop.from ? 'mesent-field' : 'othersent-field'}>
                    <div className={auth.currentUser.uid === prop.from ? 'mesent-content' : 'othersent-content'}>
                        <p>{prop.text}</p>
                    </div>
                </div>
                ) : <></>}
            </Popconfirm>
            
        </div>
    )
}