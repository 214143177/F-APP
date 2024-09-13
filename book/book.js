// 获取所有的上传区域
const uploadAreas = document.querySelectorAll('.upload-area');

// 为每个上传区域添加拖拽事件
uploadAreas.forEach(uploadArea => {
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
});

// 获取所有文件输入元素
const fileInputs = document.querySelectorAll('.file-input');

// 为每个文件输入元素添加change事件
fileInputs.forEach(fileInput => {
    fileInput.addEventListener('change', handleFileChange);
});

// 处理文件输入的通用函数
function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        readAndDisplayImage(event.target, file);
    }
}

// 处理拖拽事件的通用函数
function handleDragOver(event) {
    event.preventDefault();
    event.target.style.backgroundColor = '#e1e1e1';
}

// 处理拖拽离开事件的通用函数
function handleDragLeave(event) {
    event.target.style.backgroundColor = '#f3f3f3';
}

// 处理拖拽放置事件的通用函数
function handleDrop(event) {
    event.preventDefault();
    handleDragLeave(event);
    const files = event.dataTransfer.files;
    if (files.length) {
        readAndDisplayImage(event.target, files[0]);
    }
}

// 其他代码保持不变...

// 读取并显示图片的通用函数，添加错误处理
function readAndDisplayImage(container, file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        container.innerHTML = ''; // 清空区域内容
        container.appendChild(img); // 添加图片
    };
    reader.onerror = function (event) {
        displayError(container, '文件读取错误！');
    };
    reader.readAsDataURL(file);
}

// 检查文件类型和大小的函数
function validateFile(file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 2 * 1024 * 1024; // 例如限制大小为2MB

    if (!allowedTypes.includes(file.type)) {
        displayError(container, '不支持的文件类型！');
        return false;
    }

    if (file.size > maxSize) {
        displayError(container, '文件太大，不能超过2MB！');
        return false;
    }

    return true;
}

// 处理文件输入的通用函数，添加文件验证
function handleFileChange(event) {
    const file = event.target.files[0];
    if (file && validateFile(file)) {
        readAndDisplayImage(event.target, file);
    }
}

// 处理拖拽放置事件的通用函数，添加文件验证
function handleDrop(event) {
    event.preventDefault();
    handleDragLeave(event);
    const files = event.dataTransfer.files;
    if (files.length) {
        const file = files[0];
        if (validateFile(file)) {
            readAndDisplayImage(event.target, file);
        }
    }
}

// 显示错误信息的函数
function displayError(container, message) {
    container.innerHTML = ''; // 清空区域内容
    const errorElement = document.createElement('div');
    errorElement.className = 'upload-error'; // 可以添加CSS类来设置样式
    errorElement.textContent = message;
    container.appendChild(errorElement); // 显示错误信息
}