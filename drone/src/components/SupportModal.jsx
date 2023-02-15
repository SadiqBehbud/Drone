import { connect } from "react-redux";
import message_icon from "../assets/icons/message.png";

function SupportModal({ supportmodalshow, dispatch }) {
  console.log(supportmodalshow);
  return (
    <div className='support-container'>
      <div
        className={
          supportmodalshow ? "support-top show-support" : "support-top"
        }
      >
        <div className='blue'> Söhbətləriniz </div>
        <div className='root-message'>
          <div>

            <img
              src='https://static.intercomassets.com/avatars/5366612/square_128/130522862_3379324325454966_786719282983717325_n-1642424042.jpg'
              alt=''
            />          <h5>Şahruz Muradlı</h5>

            <p>xəttədir</p>
            
          </div>
          <h5 className="speak">Söhbətə hazırıq,
          <br/>Sizə necə kömək edə bilərik?</h5>
        </div>
        <input type="text" placeholder="Sualınızı qeyd edin..." />
        <button> <h3>Göndər</h3> </button>
      </div>
      <div className='support-click'>
        <img
          src={message_icon}
          alt=''
          onClick={(e) => {
            dispatch({
              type: "SET_SUPPORTMODALSHOW",
              payload: supportmodalshow ? false : true,
            });
          }}
        />
        {/* <img src="" alt="" />  */}
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(SupportModal);
