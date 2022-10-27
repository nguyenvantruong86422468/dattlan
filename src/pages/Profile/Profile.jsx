import { Avatar, Card, Col, Divider, List, Row, Space } from 'antd'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { quanLyNguoiDungServices } from '../../Service/QuanLyNguoiDungServices';

let data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: '',
  title: `ant design part ${i}`,
  avatar: 'data:image/jpeg;base64,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',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

export default function Profile() {
  let { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  let [ticketOD, setTicketOD] = useState([])
  useEffect(() => {
    quanLyNguoiDungServices.GetTicketOrdered().then((result) => {
      setTicketOD(result.data.content.thongTinDatVe)
    }).catch((error) => { console.log(error) })
  }, [])
  const renderTicketOrdered = (list) => {
    return list.map((info) => {
      return `${info.tenHeThongRap} | ${info.tenRap} | Ghế ${info.tenGhe}` 
    })

  }
  data = ticketOD.map((m) => {
    return {
      href: '',
      title: m.tenPhim,
      avatar: m.hinhAnh,
      description: `Giá: ${m.giaVe} - Thời lượng: ${m.thoiLuongPhim}p - Mã vé: ${m.maVe}`,
      content:
        <Card title={`Ngày đặt : ${moment(m.ngayDat).format("DD/MM/YYYY")} `} >
          <List
            size="small"
            dataSource={renderTicketOrdered(m.danhSachGhe)}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Card>
      ,
    }
  })
  return (
    <div>
      <h1>Thông tin người dùng :</h1>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <Card>
          <Divider style={{fontSize:30}} orientation="middle">Thông Tin Cá Nhân</Divider>
            <Row className='pt-5' style={{ paddingLeft: 100 }} gutter={[0, 30]}>
              <Col span={12}><h5>Tài Khoản :</h5></Col>
              <Col span={12}>{userLogin.taiKhoan}</Col>
              <Col span={12}><h5>Họ Tên :</h5></Col>
              <Col span={12}>{userLogin.hoTen}</Col>
              <Col span={12}><h5>Email :</h5></Col>
              <Col span={12}>{userLogin.email}</Col>
              <Col span={12}><h5>Số điện thoại :</h5></Col>
              <Col span={12}>{userLogin.soDT}</Col>
              <Col span={12}><h5>Mã loại người dùng :</h5></Col>
              <Col span={12}>{userLogin.maLoaiNguoiDung}</Col>
              <Col span={12}><h5>Mã nhóm :</h5></Col>
              <Col span={12}>{userLogin.maNhom}</Col>
            </Row>
          </Card>

        </Col>
        <Col span={12}>
          <Card>
          <Divider style={{fontSize:30}} orientation="middle">Lịch Sử đặt ghế</Divider>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                pageSize: 3
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                >
                  <List.Item.Meta
                    avatar={<Avatar size={60} src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
