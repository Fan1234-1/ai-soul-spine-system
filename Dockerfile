# 多階段構建 - 生產級 Docker 配置
FROM node:18-alpine AS builder

# 設置工作目錄
WORKDIR /app

# 複製 package 文件
COPY package*.json ./
COPY tsconfig*.json ./

# 安裝依賴
RUN npm ci --only=production && npm cache clean --force

# 複製源代碼
COPY src/ ./src/
COPY .kiro/ ./.kiro/

# 構建應用
RUN npm run build

# 生產階段
FROM node:18-alpine AS production

# 創建非 root 用戶
RUN addgroup -g 1001 -S soul && \
    adduser -S soul -u 1001

# 安裝必要的系統依賴
RUN apk add --no-cache \
    curl \
    dumb-init \
    && rm -rf /var/cache/apk/*

# 設置工作目錄
WORKDIR /app

# 複製構建產物和依賴
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.kiro ./.kiro

# 創建必要的目錄
RUN mkdir -p logs .yuhun/metrics && \
    chown -R soul:soul /app

# 切換到非 root 用戶
USER soul

# 健康檢查
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/monitoring/health || exit 1

# 暴露端口
EXPOSE 3000 9090

# 使用 dumb-init 作為 PID 1
ENTRYPOINT ["dumb-init", "--"]

# 啟動應用
CMD ["node", "dist/api/server.js"]