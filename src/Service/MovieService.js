import { GROUP_ID, GROUP_ID10, GROUP_ID11, GROUP_ID30, GROUP_ID4, GROUP_ID5, GROUP_ID6, GROUP_ID7, GROUP_ID8, GROUP_ID9, GROUP_IDtrangchu } from "../ultil/setting"
import { Service } from "./Service"
import { GROUP_ID2 } from "../ultil/setting"
import { GROUP_ID3 } from "../ultil/setting" 


export class MovieService extends Service{
    GetBannerList = () => {
        return this.get("/api/QuanLyPhim/LayDanhSachBanner")
    }
    GetMovieList = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
        
    }
    GetMovieList2 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID2}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID2}`)
        
    }
    GetMovieList3 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID3}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID3}`)
        
    }
    GetMovieList4 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID4}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID4}`)
        
    }
    GetMovieList5 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID5}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID5}`)
        
    }
    GetMovieList6 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID6}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID6}`)
        
    }
    GetMovieList7 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID7}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID7}`)
        
    }
    GetMovieList8 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID8}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID8}`)
        
    }
    GetMovieList9 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID9}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID9}`)
        
    }
    GetMovieList10 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID10}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID10}`)
        
    }
    GetMovieList11 = (name = "") => {
        if(name.trim() !== ""){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID11}&tenPhim=${name}`)
        }else return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID11}`)
        
    }

    GetMovieInfo = (id) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    }
    AddNewMovie = (data) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,data)
    }
    EditMovie = (formData) => {
        return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`,formData)
    }
    DeletaMovie = (id) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${id}`)
    }
}
export const movieService = new MovieService();