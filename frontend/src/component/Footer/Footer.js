import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-content'>
          <div className='help-customer'>
            CHĂM SÓC KHÁCH HÀNG
          </div>
          <ul className='f-listmenu'>
            <li>
              <Link>Tích điểm Quà tặng VIP</Link>
            </li>
            <li>
              <Link>Lịch sử mua hàng</Link>
            </li>
            <li>
              <Link>Tìm hiểu về mua trả góp</Link>
            </li>
            <li>
              <Link>Chính sách bảo hành</Link>
            </li>
          </ul>
        </div>
        <div className='footer-content'>
          <div className='help-customer'>
            VÈ THEGIOIDIDONG
          </div>
          <ul className='f-listmenu'>
            <li>
              <Link>Giới thiệu công ty (MWG.vn)</Link>
            </li>
            <li>
              <Link>Tuyển dụng</Link>
            </li>
            <li>
              <Link>Gửi góp ý, khiếu nại</Link>
            </li>
            <li>
              <Link>Tìm siêu thị</Link>
            </li>
            <li>
              <Link>Xem bản mobile</Link>
            </li>
          </ul>
        </div>
        <div className='footer-content'>
          <div className='help-customer'>
            <p className='f-listtel-title'>
              <strong>Tổng đài hỗ trợ</strong> (Miễn phí gọi)
            </p>
          </div>
          <p className='f-listtel-content'>
            <span>Gọi mua:</span>
            <Link>1800.1060 (7:30 - 22:00)</Link>
          </p>
          <p className='f-listtel-content'>
            <span>Kỹ thuật:</span>
            <Link>1800.1763 (7:30 - 22:00)</Link>
          </p>
          <p className='f-listtel-content'>
            <span>Khiếu nại:</span>
            <Link>1800.1062 (8:00 - 21:30)</Link>
          </p>
          <p className='f-listtel-content'>
            <span>Bảo hành:</span>
            <Link>1800.1064 (8:00 - 21:00)</Link>
          </p>
        </div>
        <div className='footer-content'>
          <div className='help-customer'>
            THEO DÕI CHÚNG TÔI
          </div>
          <div className='f-social'>
            <Link to="https://www.facebook.com/thegioididongcom" className='link-fb'>
              <FaFacebook className='icon facebook' />
              <span>3799.2k Fan</span>
            </Link>
            <Link className='link-youtube'>
              <FaYoutube className='icon youtube' />
              <span>857k Đăng ký</span>
            </Link>
            <Link className='link-zalo'>
              <img src="../../../image/icon_zalo.png" alt="" />
              <span>Zalo TGDĐ</span>
            </Link>
          </div>
          <div className='f-certify'>
            <Link className='no-followed'>
              <img src="../../../image/bocongthuong.png" alt="" />
            </Link>
            <Link className='no-followed'>
              <img src="../../../image/protected.png" alt="" />
            </Link>
            <Link className='no-followed'>
              <img src="../../../image/tinhiemmang.png" alt="" />
            </Link>
          </div>
          <div className='f-website'>
            <p>Website cùng tập đoàn</p>
            <ul className='logo-list'>
              <li>
                <Link>
                  <img src="../../../image/topzone.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/dienmayxanh.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/bachhoaxanh.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/nhathuocankhang.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer >
  )
}

export default Footer