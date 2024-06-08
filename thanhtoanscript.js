document.addEventListener('DOMContentLoaded', function() {
    const paymentMethodSelect = document.getElementById('payment-method');
    const creditCardInfo = document.getElementById('credit-card-info');
    const bankTransferImage = document.getElementById('bank-transfer-image');

    paymentMethodSelect.addEventListener('change', function() {
        if (this.value === 'credit-card') {
            creditCardInfo.style.display = 'block';
            bankTransferImage.style.display = 'none'; // Ẩn ảnh khi chọn thanh toán bằng thẻ tín dụng
        } else if (this.value === 'bank-transfer') {
            creditCardInfo.style.display = 'none';
            bankTransferImage.style.display = 'block'; // Hiện ảnh khi chọn thanh toán bằng chuyển khoản ngân hàng
        } else {
            creditCardInfo.style.display = 'none';
            bankTransferImage.style.display = 'none'; // Ẩn ảnh khi chọn thanh toán bằng tiền mặt
        }
    });

    // Ẩn ảnh chuyển khoản ngân hàng và thông tin thẻ tín dụng khi trang được tải lần đầu
    bankTransferImage.style.display = 'none';
    creditCardInfo.style.display = 'none';

    // Kiểm tra phương thức thanh toán mặc định khi trang được tải lần đầu
    if (paymentMethodSelect.value === 'credit-card') {
        creditCardInfo.style.display = 'block';
    } else if (paymentMethodSelect.value === 'bank-transfer') {
        bankTransferImage.style.display = 'block';
    }
});
