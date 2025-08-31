const CUSTOMER_SITES = {
    bfzym3u8: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '线路一',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
