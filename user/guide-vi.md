# Hướng Dẫn Sử Dụng

> [← Back to Documentation Home](../README.md)

Hướng dẫn sử dụng Unnamed Translate cho người dùng Việt Nam.

## Mục Lục

- [Dịch Thuật](#dịch-thuật)
- [Từ Điển](#từ-điển)
- [Lịch Sử](#lịch-sử)
- [Viết Lại](#viết-lại)
- [Phím Tắt](#phím-tắt)

## Dịch Thuật

### Các Bước Dịch

1. **Nhập văn bản** cần dịch vào ô bên trái (tối đa 2000 ký tự)
2. **Chọn ngôn ngữ**: nguồn và đích (hỗ trợ 8 ngôn ngữ)
3. **Chọn giọng văn**:
   - Tự nhiên
   - Thân mật
   - Trang trọng
   - Công sở
4. **Chọn vai trò**: Trung lập, Thân thiện, Hài hước, NPC
5. **Nhấn "Dịch"** hoặc `Ctrl+Enter`

### Nhiều Bản Dịch

- Chọn số lượng bản dịch (1-3)
- Xem độ tin cậy của từng bản
- Kiểm tra dịch ngược để đảm bảo chất lượng

## Từ Điển

### Tra Từ

- **Click vào từ** trong kết quả dịch để xem nghĩa chi tiết
- Xem **phiên âm** IPA
- Nghe **phát âm** với Web Speech API
- Xem **ví dụ** và cách dùng

### Các Loại Từ Điển

- Từ điển Anh-Việt
- Từ điển Việt-Anh
- Hỗ trợ 8 ngôn ngữ khác nhau

## Lịch Sử

### Quản Lý Lịch Sử

- Tất cả bản dịch được **lưu tự động** trong trình duyệt
- **Tìm kiếm** lịch sử với thanh tìm kiếm
- **Xóa** từng bản dịch hoặc xóa tất cả

### Bảo Mật

- Dữ liệu lưu **local** trong trình duyệt
- Không gửi lên server
- Xóa cache trình duyệt = xóa lịch sử

## Viết Lại

### Chức Năng Viết Lại

- **Sửa ngữ pháp**: Tự động sửa lỗi ngữ pháp
- **Viết lại tự nhiên**: Làm văn bản nghe tự nhiên hơn
- **Viết lại trang trọng**: Chuyển sang văn phong trang trọng
- **Đơn giản hóa**: Làm văn bản dễ hiểu hơn

## Phím Tắt

| Phím Tắt | Chức Năng |
|----------|-----------|
| `Ctrl+Enter` | Dịch ngay |
| `Ctrl+Shift+D` | Mở từ điển |
| `Ctrl+L` | Xóa văn bản |
| `Ctrl+H` | Mở/đóng lịch sử |
| `Ctrl+Shift+L` | Chuyển đổi ngôn ngữ |

## Câu Hỏi Thường Gặp

**Q: Dịch có chính xác không?**
A: Sử dụng Cloudflare AI với độ chính xác cao. Hỗ trợ dịch ngược để kiểm tra.

**Q: Có miễn phí không?**
A: Hoàn toàn miễn phí. Không giới hạn số lần dịch.

**Q: Dữ liệu có an toàn không?**
A: Không lưu dữ liệu người dùng trên server. Chỉ lưu lịch sử local.

## Liên Quan

- [Kiến Trúc Hệ Thống](../architecture/overview.md) - Cách hệ thống hoạt động
- [API Reference](../api/endpoints.md) - Tài liệu kỹ thuật
- [Hướng Dẫn Triển Khai](../deployment/vps.md) - Dành cho developer
