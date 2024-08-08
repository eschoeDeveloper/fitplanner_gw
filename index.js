require('dotenv').config();

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.json()); // JSON 형태의 요청 바디를 파싱하기 위해 필요합니다.
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 요청 바디를 파싱하기 위해 필요합니다.

const apiProxy = createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // /api 경로를 제거하여 대상 URL과 일치시킵니다.
    },
    onProxyReq: (proxyReq, req, res) => {
        // 요청 전송 전에 헤더나 요청 데이터를 수정할 수 있습니다.
    },
    onProxyRes: (proxyRes, req, res) => {
        let resData = [];
        const contentType = proxyRes.headers['content-type'];

        // 청크 단위로 응답 데이터 수집하여 결과 데이터에 입력
        proxyRes.on('data', (chunk) => {
            resData.push(chunk);
        });

        proxyRes.on('end', () => {
            resData = Buffer.concat(resData).toString();

            if (contentType && contentType.includes('application/json')) {
                try {
                    const jsonData = JSON.parse(resData);
                    jsonData.modified = true;
                    res.json(jsonData);
                } catch (err) {
                    res.status(500).json({ message: 'Error parsing JSON response', error: err.message });
                }
            } else {
                res.send(resData);
            }
        });
    },
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Error in proxy', error: err.message });
    },
});

app.use('/api', apiProxy);

const gwPort = process.env.PORT || 8000;

app.listen(gwPort, () => {
    console.log(`FitPlanner GW Up Success Port ${gwPort}`);
});