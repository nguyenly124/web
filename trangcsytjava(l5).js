document.addEventListener("DOMContentLoaded", function() {
    search();
});

const search = () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const typeSelect = document.getElementById('typeSelect').value;
    const resultsDiv = document.getElementById('results');

    // Fake data for demonstration
    const data = [
        { name: 'Bệnh viện A', address: 'Địa chỉ A', phone: '123456789', type: 'benhviencong', image: 'anh1.jpg' },
        { name: 'Phòng khám B', address: 'Địa chỉ B', phone: '987654321', type: 'phongkham', image: 'anh_2.png' },
        { name: 'Bệnh viện C', address: 'Địa chỉ C', phone: '456123789', type: 'benhvientu', image: 'anh_3.png' },
        { name: 'Xét nghiệm D', address: 'Địa chỉ D', phone: '321654987', type: 'xetnghiem', image: 'anh_4.jpg' },
        { name: 'Bệnh viện A1', address: 'Địa chỉ A1', phone: '321654987', type: 'benhviencong', image: 'anh_5.jpg' },
        { name: 'Xét nghiệm D2', address: 'Địa chỉ D2', phone: '321654987', type: 'xetnghiem', image: 'anh_6.jpg' },
        { name: 'Bệnh viện A2', address: 'Địa chỉ A2', phone: '123456789', type: 'benhviencong', image: 'anh_7.jpg' },
        { name: 'Phòng khám B1', address: 'Địa chỉ B1', phone: '987654321', type: 'phongkham', image: 'anh8.jpg' },
        { name: 'Bệnh viện C1', address: 'Địa chỉ C1', phone: '456123789', type: 'benhvientu', image: 'anh9.jpg' },
        { name: 'Xét nghiệm D1', address: 'Địa chỉ D1', phone: '321654987', type: 'xetnghiem', image: 'anh10.jpg' },
        { name: 'Bệnh viện A3', address: 'Địa chỉ A3', phone: '321654987', type: 'benhviencong', image: 'anh11.jpg' },
        { name: 'Xét nghiệm D2', address: 'Địa chỉ D2', phone: '321654987', type: 'xetnghiem', image: 'anh_6.jpg' },
    ];

    const filteredData = data.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchInput);
        const matchesType = typeSelect === 'all' || item.type === typeSelect;
        return matchesSearch && matchesType;
    });

    resultsDiv.innerHTML = '';

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'result-item';
            itemDiv.innerHTML = `
                <div class="info">
                    <img src="${item.image}" alt="${item.name}" class="result-image">
                    <h3>${item.name}</h3>
                    <p>${item.address}</p>
                    <p>${item.phone}</p>
                </div>
                <div class="actions">
                    <button class="details-button" onclick="viewDetails('${item.name}', '${item.address}', '${item.phone}', '${item.image}', this)">Xem Chi Tiết</button>
                    <button class="book-button" onclick="bookAppointment('${item.name}')">Đặt Lịch Khám</button>
                </div>
            `;
            resultsDiv.appendChild(itemDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>Không tìm thấy kết quả.</p>';
    }
};

const viewDetails = (name, address, phone, image, element) => {
    // Populate the details pane
    const detailsPane = document.getElementById('details-pane');
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = `
        <h4>Chi Tiết ${name}</h4>
        <img src="${image}" alt="${name}" class="details-image">
        <p><strong>Địa chỉ:</strong> ${address}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p>Thông tin thêm về ${name} sẽ được hiển thị ở đây.</p>
    `;
    detailsPane.classList.add('show-details-panel');
};

const closeDetails = () => {
    const detailsPane = document.getElementById('details-pane');
    detailsPane.classList.remove('show-details-panel');
};

const bookAppointment = (name) => {
    alert(`Đặt lịch khám cho ${name}`);
    // Implement actions for booking an appointment
};
