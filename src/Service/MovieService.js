import { GROUP_ID } from "../ultil/setting"
import { Service } from "./Service"
import { GROUP_ID2 } from "../ultil/setting"


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