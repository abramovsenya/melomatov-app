import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true, // Это позволит доступ к серверу через IP в локальной сети
		port: 3000, // Укажи любой порт, который тебе нужен (можно оставить 3000)
		strictPort: true, // Гарантирует, что используется именно указанный порт
		open: true, // Откроет проект в браузере при запуске сервера на ПК
		// hmr настройки не обязательны, можно добавить для управления обновлением модулей
		hmr: {
			host: '127.0.0.1', // Укажи локальный IP-адрес компьютера в сети (например, '192.168.0.101')
			port: 3000,
		},
	},
});
