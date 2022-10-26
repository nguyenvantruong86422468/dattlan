import { Col, Row } from 'antd'
import React from 'react'
import '../Footer/MainFooter.css'

export default function MainFooter() {
  return (
    <div>
        <Row className='footer text-center'>
          <Col span={6}>
            <h5>Giới Thiệu:</h5>
            <ul className='content'>
              <li><a href="#!">Về Chúng tôi</a> </li>
              <li><a href="#!">Thỏa thuật sử dụng</a></li>
              <li><a href="#!">Quy chế thỏa thuận</a> </li>
              <li><a href="#!">Chính sách bảo mật</a></li>
            </ul>
          </Col>
          <Col span={6}>
            <h5>Góc điện ảnh:</h5>
            <ul className='content'>
              <li><a href="#!">Thể loại phim</a> </li>
              <li><a href="#!">Bịnh luận phim</a></li>
              <li><a href="#!">Blog điện ảnh</a> </li>
              <li><a href="#!">Phim Điện ảnh</a></li>
            </ul>
          </Col>
          <Col span={6}>
            <h5>Hỗ Trợ:</h5>
            <ul className='content'>
              <li><a href="#!">Góp ý</a> </li>
              <li><a href="#!">SALE & SERVICES</a></li>
              <li><a href="#!">Rạp / Giá Vé</a> </li>
              <li><a href="#!">Tuyển dụng</a></li>
            </ul>
          </Col>
          <Col span={6}>
            <h5>Kết nối:</h5>
            <ul className='content'>
              <li><a href="#!">CENENA</a> </li>
              <li><a href="#!">LOTETER</a></li>
              <li><a href="#!">Doawload</a> </li>
            
            </ul>
          </Col>
        </Row>
    </div>
  )
}
