import React from 'react'
import { Link } from 'react-router-dom';
import clsx from 'clsx'

import styles from './Footer.module.scss'

import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerContent}>
          <div className={styles.helpCustomer}>
            CHĂM SÓC KHÁCH HÀNG
          </div>
          <ul className={styles.fListMenu}>
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
        <div className={styles.footerContent}>
          <div className={styles.helpCustomer}>
            VÈ THEGIOIDIDONG
          </div>
          <ul className={styles.fListMenu}>
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
        <div className={styles.footerContent}>
          <div className={styles.helpCustomer}>
            <p className={styles.fListTelTitle}>
              <strong>Tổng đài hỗ trợ</strong> (Miễn phí gọi)
            </p>
          </div>
          <p className={styles.fListTelContent}>
            <span>Gọi mua:</span>
            <Link>1800.1060 (7:30 - 22:00)</Link>
          </p>
          <p className={styles.fListTelContent}>
            <span>Kỹ thuật:</span>
            <Link>1800.1763 (7:30 - 22:00)</Link>
          </p>
          <p className={styles.fListTelContent}>
            <span>Khiếu nại:</span>
            <Link>1800.1062 (8:00 - 21:30)</Link>
          </p>
          <p className={styles.fListTelContent}>
            <span>Bảo hành:</span>
            <Link>1800.1064 (8:00 - 21:00)</Link>
          </p>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.helpCustomer}>
            THEO DÕI CHÚNG TÔI
          </div>
          <div className={styles.fSocial}>
            <Link to="https://www.facebook.com/thegioididongcom" className={styles.linkFb}>
              <FaFacebook className={clsx(styles.icon, styles.facebook)} />
              <span>3799.2k Fan</span>
            </Link>
            <Link className={styles.linkYoutube}>
              <FaYoutube className={clsx(styles.icon, styles.youtube)} />
              <span>857k Đăng ký</span>
            </Link>
            <Link className={styles.linkZalo}>
              <img src="../../../image/logo/icon_zalo.png" alt="" />
              <span>Zalo TGDĐ</span>
            </Link>
          </div>
          <div className={styles.fCertify}>
            <Link className={styles.noFollowed}>
              <img src="../../../image/logo/bocongthuong.png" alt="" />
            </Link>
            <Link className={styles.noFollowed}>
              <img src="../../../image/logo/protected.png" alt="" />
            </Link>
            <Link className={styles.noFollowed}>
              <img src="../../../image/logo/tinhiemmang.png" alt="" />
            </Link>
          </div>
          <div className={styles.fWebsite}>
            <p>Website cùng tập đoàn</p>
            <ul className={styles.logoList}>
              <li>
                <Link>
                  <img src="../../../image/logo/topzone.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/logo/dienmayxanh.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/logo/bachhoaxanh.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/logo/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/logo/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/logo/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/logo/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/logo/nhathuocankhang.png" alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="../../../image/logo/nhathuocankhang.png" alt="" />
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