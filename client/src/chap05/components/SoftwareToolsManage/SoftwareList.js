import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function SoftwareList(props) {
  const [responseSwtoolList, setResponseSwtoolList] = useState('') // 태생이 비동기입니다.
  const [append_SwtoolList, setAppend_SwtoolList] = useState('') // 태생이 비동기입니다.
  const callSwToolListApi = async () => {
    axios.post('/api/Swtool?type=list', () => {
    })
      .then(res => {
        try {
          if(responseSwtoolList === '') {
            setResponseSwtoolList(res)
          }
          setAppend_SwtoolList(SwToolListAppend())
        } catch (error) {
          alert('작업 중 에러가 발생했습니다.')
        }
      })
      .catch(error => {
        alert('작업 중 에러가 발생했습니다.')
        return false
      })
  }

  const SwToolListAppend = () => {
    let result = []
    if(responseSwtoolList === '') return;
    var SwToolList = responseSwtoolList.data;

    for (let i = 0; i < SwToolList.json.length; i++) {
      let data = SwToolList.json[i]

      let date = data.reg_date;
      let year = date.substring(0, 4)
      let month = date.substring(4, 2)
      let day = date.substring(6, 2)
      let reg_date = year + '.' + month + '.' + day

      result.push(
        <tr className={`hidden_type`}>
          <td>{data.swt_toolname}</td>
          <td>{data.swt_function}</td>
          <td>{reg_date}</td>
          <td>
            <Link to={`/AdminSoftwareView/${data.swt_code}`}
                  className={`bt_c1 bt_c2 w50_b`}>수정</Link>
            <a href={`#n`} className={`bt_c1 w50_b`}>삭제</a>
          </td>
        </tr>
      )
    }
    return result;
  }

  useEffect(() => {
    callSwToolListApi()
  }, [responseSwtoolList]);

  return (
    <section className="sub_wrap">
      <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
        <div className="li_top">
          <h2 className="s_tit1">Software Tools 목록</h2>
          <div className="li_top_sch af">
            <Link to={'/AdminSoftwareView/register'} className="sch_bt2 wi_au">Tool 등록</Link>
          </div>
        </div>

        <div className="list_cont list_cont_admin">
          <table className="table_ty1 ad_tlist">
            <thead>
            <tr>
              <th>툴 이름</th>
              <th>기능</th>
              <th>등록일</th>
              <th>기능</th>
            </tr>
            </thead>
          </table>
          <table className="table_ty2 ad_tlist">
            <tbody>
            {append_SwtoolList}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default SoftwareList;