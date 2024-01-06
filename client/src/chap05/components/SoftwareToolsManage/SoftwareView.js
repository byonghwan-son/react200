import React from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';
import Swal from 'sweetalert2'

function SoftwareView(props) {
  const handleFileInput = () => {}

  const submitClick = async (type, e) => {
    let Swt_toolname_checker = $('#is_Swt_toolname')
    let Swt_demo_site_checker = $('#is_Swt_demo_site')
    let Giturl_checker = $('#is_Giturl')
    let Comments_checker = $('#is_Comments')
    let Swt_function_checker = $('#is_Swt_function')

    const fnValidate = (e) => {
      if(Swt_toolname_checker.val() === '') {
        Swt_toolname_checker.addClass('border_validate_err');
        alert('툴 이름을 다시 확인해 주세요.')
        Swt_toolname_checker.focus()
        return false;
      }
      Swt_toolname_checker.removeClass('border_validate_err');

      if(Swt_demo_site_checker.val() === '') {
        Swt_demo_site_checker.addClass('border_validate_err');
        alert('데모 url을 다시 확인해 주세요.')
        Swt_demo_site_checker.focus()
        return false;
      }
      Swt_demo_site_checker.removeClass('border_validate_err');

      if(Giturl_checker.val() === '') {
        Giturl_checker.addClass('border_validate_err');
        alert('Github URL을 다시 확인해 주세요.')
        Giturl_checker.focus()
        return false;
      }
      Giturl_checker.removeClass('border_validate_err');

      if(Comments_checker.val() === '') {
        Comments_checker.addClass('border_validate_err');
        alert('설명을 다시 확인해 주세요.')
        Comments_checker.focus()
        return false;
      }
      Comments_checker.removeClass('border_validate_err');

      if(Swt_function_checker.val() === '') {
        Swt_function_checker.addClass('border_validate_err');
        alert('상세 기능을 다시 확인해 주세요.')
        Swt_function_checker.focus()
        return false;
      }
      Swt_function_checker.removeClass('border_validate_err');

      return true;
    }

    if(fnValidate()) {
      let jsonStr = $('form[name="frm"]').serialize()
      jsonStr = decodeURIComponent(jsonStr)
      let Json_form = JSON.stringify(jsonStr).replace(/\"/gi, '')
      Json_form = `{"${Json_form.replace(/\&/g,'\",\"').replace(/=/gi, '\":"')}"}`;

      try {
        const response = await fetch('/api/Swtool?type=' + type, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: Json_form
        })
        const body = await response.text()
        if(body === 'succ') {
          if(type === 'save') {
            sweetalertSucc('Software Tools 등록이 완료되었습니다.', false)
          }
          setTimeout(function() {
            props.history.push('/SoftwareList');
          }.bind(this), 1500)
        }
        else {
          alert('작업 중 오류가 발생했습니다.')
        }
      } catch(error) {
        alert('작업 중 오류가 발생했습니다.')
      }
    }
  }

  const sweetalertSucc = (title, showConfirmButton) => {
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: title,
      showConfirmButton: showConfirmButton,
      timer: 1000
    })
  }

  return (
    <>
      <section className={`sub_wrap`}>
        <article className={`ct1`}>
          <div>
            <h2 className={`s_tit1`}>Software Tools 등록/수정</h2>
          </div>
          <div className={`bo_w re1_wrap re1_wrap_writer`}>
            <form action="" method={`post`} name={`frm`} id={`frm`} >
              <input type="hidden" id={`is_Swtcode`} name={`is_Swtcode`}/>
              <input type="hidden" id={`is_Email`} name={`is_Email`} value={`guest`}/>
              <article>
                <p style={{textAlign: "right"}}>
                  <span className={`red_f`}>(*)</span>표시는 필수입력사항 입니다.
                </p>
                <div className={`tb_outline`}>
                  <table className={`table_ty1`}>
                    <tbody>
                    <tr>
                      <th>
                        <label htmlFor={`is_Swt_toolname`}>툴 이름<span className={`red_f`}>(*)</span></label>
                      </th>
                      <td>
                        <input type="text" name={`is_Swt_toolname`} id={`is_Swt_toolname`} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor={`is_Swt_toolname`}>데모 URL<span className={`red_f`}>(*)</span></label>
                      </th>
                      <td>
                        <input type="text" name={`is_Swt_demo_site`} id={`is_Swt_demo_site`} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor={`is_Giturl`}>Github URL<span className={`red_f`}>(*)</span></label>
                      </th>
                      <td>
                        <input type="text" name={`is_Giturl`} id={`is_Giturl`} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor={`is_Comments`}>설명<span className={`red_f`}>(*)</span></label>
                      </th>
                      <td>
                        <input type="text" name={`is_Comments`} id={`is_Comments`} />
                      </td>
                    </tr>
                    <tr className={`div_tb_tr`}>
                      <th>
                        메뉴얼 파일 #1
                      </th>
                      <td className={`fileBox`}>
                        <label htmlFor={`uploadBtn1`} className={`btn_file`}>파일선택</label>
                        <input type="text" id={`manualfile`} className={`fileName`} readOnly={`readonly`}
                               placeholder={`선택된 파일 없음`}/>
                        <input type="file" id={`uploadBtn1`} className={``}
                               onChange={e => handleFileInput('manual', e)}/>
                        <div id={`upload_manual`}></div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        메인 이미지
                      </th>
                      <td className={`fileBox`}>
                        <label htmlFor={`imageSelect`} className={`btn_file`}>파일선택</label>
                        <input type="text" id={`imagefile`} className={`fileName`} readOnly={`readonly`}
                               placeholder={`선택된 파일 없음`}/>
                        <input type="file" id={`imageSelect`} className={``}
                               onChange={e => handleFileInput('manual', e)}/>
                        <div id={`upload_img`}></div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        라벨 이미지
                      </th>
                      <td className={`fileBox`}>
                        <label htmlFor={`imageSelect`} className={`btn_file`}>파일선택</label>
                        <input type="text" id={`imagefile2`} className={`fileName`} readOnly={`readonly`}
                               placeholder={`선택된 파일 없음`}/>
                        <input type="file" id={`imageSelect2`} className={``}
                               onChange={e => handleFileInput('file2', e)}/>
                        <div id={`upload_img2`}></div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor={`is_Swt_function`}>상세 기능<span className={`red_f`}>(*)</span></label>
                      </th>
                      <td>
                        <textarea name={`is_Swt_function`} id={`is_Swt_function`} rows={``} cols={``}/>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div className={`btn_confirm mt20`} style={{marginBottom: '44px'}}>
                    <Link to={`/SoftwareList`} className={`bt_ty bt_ty1`}>취소</Link>
                    <a href={`#`} className={`bt_ty bt_ty2`} onClick={e => submitClick('save', e)}>저장</a>
                  </div>
                </div>
              </article>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default SoftwareView;